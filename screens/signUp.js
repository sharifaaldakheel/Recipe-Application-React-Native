import { StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import TextInput from "react-native-text-input-interactive";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
    const navigation = useNavigation();

    return (
       <View className="container" style={styles.container}>
        <View >
        <Image source={require('./002.png')} style={styles.Image}/>
        </View>

        <View style={styles.form}>
            <View className="regForm">
                <Text style={styles.info}>Email Address:</Text>
                <TextInput style={styles.input} placeholder='Example@email.com' />
                
                <Text style={styles.info}>Password:</Text>
                <TextInput style={styles.input} placeholder='Enter A strong password' secureTextEntry/>

                <TouchableOpacity>
                    <Text style={styles.pass}>Forget Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.btn}>
                    <Text style={styles.btntxt}>Create an Account</Text>
                </TouchableOpacity>
            </View>
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
    Image:{
        height: "45%",
        aspectRatio: 1,
        marginTop:"100%",
    },
    form: {
        backgroundColor:"#fff",
        height:"100%",
        width:"100%",
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        paddingLeft:30,
        paddingRight:30,
    },
    info:{
        paddingTop:30,
        marginBottom:10,
    },
    input:{
        justifyContent:"center",
        
    },
    pass:{
        paddingTop:20,
        color:"gray",
        alignSelf:"flex-end",
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
