import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import * as Icons from "react-native-heroicons/solid";
import { FavfoodItems } from './index.js';


export default function UserScreen() {
    const navigation = useNavigation();

    return (
        
        <View style={styles.container}>

         <TouchableOpacity style={styles.back}>
            <Icons.ArrowLeftIcon  onPress={()=> navigation.navigate('Home')} style={styles.backIcon}/>
         </TouchableOpacity>
         
         <View style={styles.avatarContainer}>
            <Image source={require('./Avatar.png')} style={styles.avatar}/>
            <Text style={styles.usertxt}>User Name</Text>
         </View>

         <View style={styles.info}>
            <Text style={styles.infotxt}>Edit Pesonal Information</Text>
            <Icons.ArrowRightIcon style={styles.arr}/>
         </View>

         <View>
         <Text style={styles.favrec}>Favorite Recipes</Text>
         </View>
         <View>
            <ScrollView>
            <View style={styles.gridContainer} >
                {
                    FavfoodItems.map((item, index) => (
                        <TouchableOpacity key={item.id} style={styles.itemContainer}
                        onPress={()=>navigation.navigate(item.navigateTo)}>
                            <Image source={item.image}  style={styles.image}/>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.time}>Preparation Time: {item.prep}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
        </View>

        </View>

    )
}   

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#262626',
      paddingTop: 60, 
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

    avatarContainer: {
      alignItems: 'center',
      marginTop: '10%', // Use percentage for positioning
    },
    avatar: {
      width: 150,
      height: 150,
      backgroundColor: '#fff',
      borderRadius: 75,
      borderColor: '#ffc300',
      borderWidth: 2,
    },
    usertxt: {
      fontSize: 28,
      color: '#fff',
      marginTop: 10,
    },
    info: {
      backgroundColor: '#3f3f3f',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginTop:15,

    },
    infotxt: {
      marginLeft: 15,
      color: '#fff',
      fontSize: 20,
    },
    arr: {
      color: '#fff',
      marginLeft: 18,
    },
    favrec: {
      marginLeft: 15,
      fontSize: 24,
      color: '#ffc300',
      marginTop: 20,
      marginBottom:20,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    itemContainer: {
      width: '48%',
      marginBottom: 10,
    },
    image: {
      width: '100%',
      height: 150,
      marginBottom: 5,
      borderRadius: 10,
      borderColor: '#ffc300',
      borderWidth: 1,
    },
    title:{
        fontSize:18,
        color:"#ffc300",
    },
    time:{
        color:"#FFF",
        paddingBottom:15,
    },
  });
  