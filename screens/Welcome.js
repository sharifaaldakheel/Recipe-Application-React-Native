import { StyleSheet, Text, View,  Image, Button, TouchableOpacity } from 'react-native';
import  React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../FirebaseConfig';




export default function WelcomeScreen() {
    const navigation = useNavigation ();
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View>
                  <Image style={styles.Image} source={require('./001.png')}/>
                </View>
                <Text style={styles.title}>
                    Super Tasty Meal Kit{'\n'}Taste Like Home!
                </Text>

                <View>
                    <TouchableOpacity onPress={()=> navigation.navigate('SignUp')} style={styles.btn}>
                        <Text style={styles.btntxt}>Get Started</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
        backgroundColor:'#262626',
    },
    Image:{
        paddingTop:"30%",
        height: "75%",
        aspectRatio: 1, 
    },
    title: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor:'#ffc300',
        borderRadius: 55,
        margin: 15,
        padding:15,
    },
    btntxt: {
        color: "#fff",
        textAlign:"center",
        fontSize: 18,
    }
});   
