import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import recipes from './RandomRecipesIndex.js'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as Icons from "react-native-heroicons/solid";

const RandomScreen = () => {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const navigation = useNavigation();

  const showNextRecipe = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * recipes.length);
    } while (newIndex === currentRecipeIndex);
    setCurrentRecipeIndex(newIndex);
  };

  const goToRecipePage = () => {
    const recipe = recipes[currentRecipeIndex];
    navigation.navigate(recipe.navigateTo, { recipe });
  };

  const currentRecipe = recipes[currentRecipeIndex];

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
        <Icons.ArrowLeftIcon style={styles.backIcon}/>
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Image source={currentRecipe.image} style={styles.image}/>
        <Text style={styles.name}>{currentRecipe.name}</Text>

        <View style={styles.row}>
          <Image source={require('./clock.png')} style={styles.icons}/>
          <Text style={styles.info}>{currentRecipe.prep}</Text>
        </View>

        <TouchableOpacity onPress={showNextRecipe} style={styles.trybtn}>
          <Text style={styles.btntxt}>Try another</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToRecipePage} style={styles.gobtn}>
          <Text style={styles.btntxt}>Go to recipe</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RandomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 80,
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
  },
  backIcon: {
    color: "#ffc300",
    height: 30,
    width: 30,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300, 
    width: 300, 
    borderRadius: 20,
    borderColor: "#ffc300",
    borderWidth: 5,
  },
  name: {
    color: "#ffc300",
    fontSize: 24,
    textAlign: "center",
    fontWeight: 'bold',
    paddingTop: 15,
  },
  prep: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  info:{
    fontSize:25,
    color:"#FFF",
    marginRight:20,
},
row:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent:"center",
  paddingTop:15,  
  paddingBottom:15, 
},
icons:{
  width:"6%",
  aspectRatio: 1,
  display:"flex",
  marginRight:5,
  marginLeft:20,
},
  trybtn: {
    borderColor: '#ffc300',
    borderWidth: 2,
    borderRadius: 55,
    padding: 10,
    marginBottom: 10,
    width: 300,

  },
  gobtn: {
    backgroundColor: '#ffc300',
    borderRadius: 55,
    padding: 10,
    width: 300,

  },
  btntxt: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});
