import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, doc, deleteDoc, getDocs, setDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import * as Icons from "react-native-heroicons/solid";


export default function TofuScreen() {

    const navigation = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);
    const [recipeId, setRecipeId] = useState(null);    

    useEffect(() => {
        const checkFavoriteStatus = async () => {
          const userId = FIREBASE_AUTH.currentUser.uid;
          const recipeRef = collection(FIREBASE_DB, "users", userId, "favorites");
          const snapshot = await getDocs(recipeRef);
          
          snapshot.forEach((doc) => { /* documents retrieved from the Firestore  */
            if (doc.data().recipeId === 'Stir-Fried Tofu') {
              setIsFavorite(true);
              setRecipeId(doc.id);
            }
          });
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
            recipeId: 'Stir-Fried Tofu',
            image: './tofu.jpg', 
            title: 'Stir-Fried Tofu',
            time: '30 Minutes',
          };
          const docRef = await addDoc(recipeRef, recipeData);
          setRecipeId(docRef.id);
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
        <Image source={require('./tofu.jpg')} style={styles.bg}/>
        </View>

        <TouchableOpacity style={styles.fav} onPress={toggleFavorite}>
          <Icons.StarIcon style={[styles.favIcon, isFavorite && styles.favIconActive]} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.back}
        onPress={()=> navigation.navigate('Home')}>
          <Icons.ArrowLeftIcon style={styles.backIcon}/>
        </TouchableOpacity>

        <View style={styles.details}>
            <Text style={styles.title}>Stir-Fried Tofu</Text>

            <View style={styles.row}>
            <Image source={require('./fire.png')} style={styles.icons}/>
            <Text style={styles.info}>150 CAL</Text>
            <Image source={require('./clock.png')} style={styles.icons}/>
            <Text style={styles.info}>30 Minutes</Text>
            </View>

            <ScrollView style={{flex: 1}}>
              <View>
              <Text style={styles.subtitle}>Ingredients:</Text>
              <Text style={styles.ing}>1 block extra firm tofu, drained and pressed{'\n'}2 tablespoons soy sauce{'\n'}1 tablespoon sesame oil{'\n'}1 tablespoon vegetable oil{'\n'}2 cloves garlic, minced{'\n'}1 teaspoon grated ginger</Text>
              </View>

              <View>
              <Text style={styles.subtitle}>Instructions:</Text>
              <Text style={styles.ing}>Cube tofu and fry until golden.
              {'\n'}Add garlic and ginger.
              {'\n'}Pour soy sauce and sesame oil.
              {'\n'}Cook for a few more minutes.
              {'\n'}Garnish and serve.</Text>
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
