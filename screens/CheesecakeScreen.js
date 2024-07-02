import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, doc, deleteDoc, getDocs, query, where } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB, FIREBASE_STORAGE } from '../FirebaseConfig';
import * as Icons from "react-native-heroicons/solid";

export default function CheesecakeScreen() {
    const navigation = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);
    const [recipeId, setRecipeId] = useState(null);

    useEffect(() => {
        const checkFavoriteStatus = async () => {
          const userId = FIREBASE_AUTH.currentUser.uid;
          const recipeRef = collection(FIREBASE_DB, "users", userId, "favorites");
          const q = query(recipeRef, where("recipeId", "==", 'Cheesecake'));
          const snapshot = await getDocs(q);
          
          if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            setIsFavorite(true);
            setRecipeId(doc.id);
          }
        };
        checkFavoriteStatus();
      }, []);
    
      const toggleFavorite = async () => {
        if (isFavorite) {
          await removeFromFavorites();
        } else {
          await addToFavorites();
        }
        setIsFavorite(!isFavorite);
      };
    
      const userId = FIREBASE_AUTH.currentUser.uid;
    
      const addToFavorites = async () => {
        try {
          const recipeRef = collection(FIREBASE_DB, "users", userId, "favorites");
          const recipeData = {
            recipeId: 'Cheesecake',
            image: 'https://firebasestorage.googleapis.com/v0/b/recipeapp-45241.appspot.com/o/Cheesecake.jpg?alt=media&token=aded600f-b039-4cc1-8d9b-b0e4cde6dfa7', 
            title: 'Classic Cheesecake',
            time: '1H 30 Mins',
          };
      
          const docRef = await addDoc(recipeRef, recipeData);
          setRecipeId(docRef.id);
          alert('Recipe has been added to your favorites!');
          console.log("Added to favorites:", recipeData);
        } catch (error) {
          console.error("Error adding favorite:", error);
        }
      };
    
    
    
      const removeFromFavorites = async () => {
        try {
          const recipeRef = doc(FIREBASE_DB, "users", userId, "favorites", recipeId);
          await deleteDoc(recipeRef);
          console.log("Removed from favorites:", recipeId); 
        } catch (error) {
          console.error("Error removing favorite:", error);
        }
      };
    return (
       <View className="container" style={styles.container}>
        <View >
        <Image source={require('./Cheesecake.jpg')} style={styles.bg}/>
        </View>

        <TouchableOpacity style={styles.fav}
        onPress={toggleFavorite}>
          <Icons.StarIcon style={[styles.favIcon, isFavorite && styles.favIconActive]}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.back} onPress={()=> {
            navigation.navigate('Home')}}>
          <Icons.ArrowLeftIcon style={styles.backIcon}/>
        </TouchableOpacity>


        <View style={styles.details}>
            <Text style={styles.title}>Classic Cheesecake</Text>

            <View style={styles.row}>
            <Image source={require('./fire.png')} style={styles.icons}/>
            <Text style={styles.info}>350 CAL</Text>
            <Image source={require('./clock.png')} style={styles.icons}/>
            <Text style={styles.info}>1 Hour 30 Minutes</Text>
            </View>

            <ScrollView style={{flex: 1}}>
              <View>
              <Text style={styles.subtitle}>Ingredients:</Text>
              <Text style={styles.ing}>1 1/2 cups graham cracker crumbs
              {'\n'}1/4 cup unsalted butter, melted
              {'\n'}24 oz cream cheese, softened
              {'\n'}1 cup granulated sugar
              {'\n'}1 tsp vanilla extract
              {'\n'}3 large eggs
              {'\n'}1 cup sour cream</Text>
              </View>

              <View>
              <Text style={styles.subtitle}>Instructions:</Text>
              <Text style={styles.ing}>Preheat oven to 325°F (160°C)
              {'\n'}Mix graham cracker crumbs and butter
              {'\n'}Beat rest of ngredients until smooth.
              {'\n'}Stir in sour cream until just combined.
              {'\n'}Bake for 45-50 minutes
              {'\n'}Optional: Top with berries before serving.</Text>
              </View>
              </ScrollView>

        </View>

     
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:60,
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
        backgroundColor:'#262626',
    },
    fav: {
        zIndex:1,
        backgroundColor:"#fff",
        flexDirection: 'row', 
        alignItems: 'flex-start',  
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 80,
        right: 30,
        height:40,
        width:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    },

    favIcon:{
        color:"#ffc300",
        height:30,
        width:30,
    },

    back: {
        backgroundColor:"#fff",
        flexDirection: 'row',  
        alignItems: 'flex-start',  
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 80,
        left: 30,
        height:40,
        width:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    },

    backIcon:{
        color:"#ffc300",
        height:30,
        width:30,
    },

    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        paddingTop:15,
        

    },
    icons:{
        width:"8%",
        height:"8%",
        aspectRatio: 1,
        display:"flex",
        marginRight:5,
        marginLeft:20,
    },
    bg:{
        height: "55%",
        aspectRatio: 1,
        marginTop:"100%",
        zIndex:-1,
    },
    details: {
        backgroundColor:"#262626",
        height:"100%",
        width:"100%",
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        marginBottom:"60%",
        paddingLeft:30,
        paddingRight:30,
    },
    title:{
        textAlign:"center",
        paddingTop:20,
        fontSize:24,
        color:"#ffc300",
    },
    info:{
        fontSize:18,
        color:"#FFF",
        marginRight:20,
    },
    
    subtitle:{
        textAlign:"left",
        paddingTop:20,
        fontSize:24,
        color:"#ffc300",
    },
    ing:{
        color:"#fff",
        fontSize:18,
        lineHeight:24,
    },
});
