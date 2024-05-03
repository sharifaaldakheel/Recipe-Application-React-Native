import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import * as Icons from "react-native-heroicons/solid";

export default function PuddingScreen() {
    const navigation = useNavigation();

    return (
       <View className="container" style={styles.container}>
        
        <View >
        <Image source={require('./pudding.jpg')} style={styles.bg}/>
        </View>

        <TouchableOpacity style={styles.fav}>
          <Icons.StarIcon style={styles.favIcon}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.back}>
          <Icons.ArrowLeftIcon  onPress={()=> navigation.navigate('Home')} style={styles.backIcon}/>
        </TouchableOpacity>


        <View style={styles.details}>
            <Text style={styles.title}>Mango Chia Pudding</Text>

            <View style={styles.row}>
            <Image source={require('./fire.png')} style={styles.icons}/>
            <Text style={styles.info}>150-200 CAL</Text>
            <Image source={require('./clock.png')} style={styles.icons}/>
            <Text style={styles.info}>2 Hours</Text>
            </View>

            <ScrollView style={{flex: 1}}>
              <View>
              <Text style={styles.subtitle}>Ingredients:</Text>
              <Text style={styles.ing}>1 ripe mango, diced
              {'\n'}1/2 cup chia seeds
              {'\n'}1 1/2 cups coconut milk (or any milk of your choice)
              {'\n'}Optional: honey or maple syrup for sweetness</Text>
              </View>

              <View>
              <Text style={styles.subtitle}>Instructions:</Text>
              <Text style={styles.ing}>Blend half of the diced mango until smooth.
              {'\n'}Mix the pureed mango, chia seeds, and coconut milk.
              {'\n'}Refrigerate for at least 2 hours.
              {'\n'}Stir before serving.
              {'\n'}Top with remaining diced mango.
              {'\n'}Serve chilled.</Text>
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
