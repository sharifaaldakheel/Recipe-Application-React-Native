import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import * as Icons from "react-native-heroicons/solid";

export default function WarpScreen() {
    const navigation = useNavigation();

    return (
       <View className="container" style={styles.container}>
        <View >
        <Image source={require('./Veggie-Wrap.jpg')} style={styles.bg}/>
        </View>

        <TouchableOpacity style={styles.fav}>
          <Icons.StarIcon style={styles.favIcon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.back}>
          <Icons.ArrowLeftIcon  onPress={()=> navigation.navigate('Home')} style={styles.backIcon}/>
        </TouchableOpacity>


        <View style={styles.details}>
            <Text style={styles.title}>Veggie Wrap</Text>

            <View style={styles.row}>
            <Image source={require('./fire.png')} style={styles.icons}/>
            <Text style={styles.info}>350 CAL</Text>
            <Image source={require('./clock.png')} style={styles.icons}/>
            <Text style={styles.info}>45 Minutes</Text>
            </View>

            <ScrollView style={{flex: 1}}>
              <View>
              <Text style={styles.subtitle}>Ingredients:</Text>
              <Text style={styles.ing}>Whole-grain wrap
              {'\n'}Hummus
              {'\n'}Sliced turkey breast
              {'\n'}Lettuce
              {'\n'}Shredded carrots
              {'\n'}Cucumber
              {'\n'}Bell peppers</Text>
              </View>

              <View>
              <Text style={styles.subtitle}>Instructions:</Text>
              <Text style={styles.ing}>Spread hummus on the whole-grain wrap.
              {'\n'}Layer sliced vegetables on top of the hummus.
              {'\n'}Roll up the wrap tightly.
              {'\n'}Seve and Enjoy!</Text>
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
        flexDirection: 'row',  // Align items horizontally
        alignItems: 'flex-start',  // Align items at the top
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
