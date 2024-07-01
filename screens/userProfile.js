import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Icons from "react-native-heroicons/solid";
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default function UserScreen() {
    const navigation = useNavigation();
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
        const getFavorites = async () => {
          const userId = FIREBASE_AUTH.currentUser.uid;
          const favoritesRef = collection(FIREBASE_DB, "users", userId, "favorites");
          const snapshot = await getDocs(favoritesRef);
          const recipes = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setFavorites(recipes);
        };
        getFavorites();
      }, []);
      
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
          <Icons.ArrowLeftIcon style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Your Favorites</Text>
        
        {favorites.length > 0 ? (
          <ScrollView>
            {favorites.filter((recipe) => recipe.recipeId).map((recipe) => (
              <TouchableOpacity 
              key={recipe.id} 
              style={styles.favoriteItem} 
              onPress={() => navigation.navigate(recipe.recipeId)}
          >
              <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeTime}>{recipe.time}</Text>
          </TouchableOpacity>
          
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.warning}>No favorites yet!</Text>
        )}
      </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#262626',
    paddingTop: 100,
  },
  back: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 60,
    left: 30,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 100,
  },
  backIcon: {
    color: "#ffc300",
    height: 30,
    width: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginVertical: 20,
  },
  warning: {
    color: "#fff",
    marginTop: 20,
  },
  favoriteItem: {
    marginVertical: 10,
    alignItems: 'center',
  },
  recipeImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  recipeTitle: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
  },
  recipeTime: {
    color: "#ffc300",
    fontSize: 16,
  },
});
