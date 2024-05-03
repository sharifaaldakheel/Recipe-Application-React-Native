import { StyleSheet, Text, View, TouchableOpacity,Image, ScrollView } from 'react-native';
import  React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icons from "react-native-heroicons/solid";
import { categories } from './index.js';
import { foodItems } from './index.js';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const [activeCategory, setactiveCategory] = useState(0);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
    <SafeAreaView>
    <TouchableOpacity style={styles.user}>
          <Icons.UserIcon onPress={()=> navigation.navigate('User Pofile')} style={styles.userIcon}/>
    </TouchableOpacity>

        <View>
            <Text style={styles.heading}>Welcome To Our Recipe Hub</Text>
            <Text style={styles.subHeading}>Discover delicious recipes to satisfy every craving and spark your culinary creativity!</Text>
        </View>

        <ScrollView horizontal>
            {
                categories.map((category, index)=> {
                    return (
                        <TouchableOpacity key={index} style={styles.category} onPress={()=> setactiveCategory(index)}>
                            <Text style={[styles.ctgText, activeCategory === index && { color: '#ffc300' }]}>
                                {category}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>

        <ScrollView>
            <View style={styles.gridContainer} >
                {
                    foodItems.map((item, index) => (
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
    </SafeAreaView>
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
    user: {
        backgroundColor:"#ffc300",
        flexDirection: 'row',  // Align items horizontally
        alignItems: 'flex-start',  // Align items at the top
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 30,
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

    userIcon:{
        color:"#fff",
        height:30,
        width:30,
    },
    heading:{
        color:"#fff",
        fontSize: 24,
        textAlign: "center",
        fontWeight: 'bold',
        paddingTop:45,
        paddingBottom:25,
    },

    subHeading:{
        color:"#fff",
        textAlign:"center",
        fontSize: 18,
    },
    category:{
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
        paddingTop:30,
        marginRight:20,
        marginLeft:20,
        height:"50%",
        },
    ctgText:{
        color:"#fff",
        fontSize:22,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop:40,
    },
    itemContainer: {
        width: '48%', // Set the width to 48% to have two columns with some spacing
        marginBottom: 10, // Add some margin at the bottom for spacing between rows
    },
    image: {
        width: '100%', // Make the image take the full width of its container
        height: 150, // Set the height as needed
        marginBottom: 5,
        borderRadius: 10,
        borderColor:"#ffc300",
        borderWidth:1,

    },
    title:{
        fontSize:22,
        color:"#ffc300",
    },
    time:{
        color:"#FFF",
        paddingBottom:15,
    },
});