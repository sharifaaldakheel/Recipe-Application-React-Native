import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../FirebaseConfig';

export default function EditScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    });

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
             <Icons.ArrowLeftIcon style={styles.backIcon}/>
            </TouchableOpacity>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                }}>
                {formikProps => (
                    <React.Fragment>
                        <View style={styles.regForm}>
                            <Text style={styles.info}>First Name:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Name'
                                onChangeText={formikProps.handleChange('name')}
                                value={formikProps.values.name}
                            />
                            {formikProps.touched.name && formikProps.errors.name ? (
                                <Text style={styles.error}>{formikProps.errors.name}</Text>
                            ) : null}
                            <Text style={styles.info}>Email Address:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Example@email.com'
                                onChangeText={formikProps.handleChange('email')}
                                value={formikProps.values.email}
                            />
                            {formikProps.touched.email && formikProps.errors.email ? (
                                <Text style={styles.error}>{formikProps.errors.email}</Text>
                            ) : null}
                            <Text style={styles.info}>Password:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Enter a strong password'
                                secureTextEntry={true}
                                onChangeText={formikProps.handleChange('password')}
                                value={formikProps.values.password}
                            />
                            {formikProps.touched.password && formikProps.errors.password ? (
                                <Text style={styles.error}>{formikProps.errors.password}</Text>
                            ) : null}
                            {loading ? (
                                <ActivityIndicator />
                            ) : (
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={formikProps.handleSubmit}>
                                    <Text style={styles.btntxt}>Update Information</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </React.Fragment>
                )}
            </Formik>
            <Image source={require('./004.png')} style={styles.image} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#262626',
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
        zIndex:100,
      },
      backIcon: {
        color: "#ffc300",
        height: 30,
        width: 30,
        
      },
    regForm: {
        width: '80%',
        marginTop: "30%",
        alignItems: 'center',
    },
    info: {
        marginBottom: 5,
        alignSelf: 'flex-start',
        paddingLeft: 10,
        color: "#fff",
    },
    input: {
        marginBottom: 15,
        alignSelf: 'flex-start',
        paddingLeft: 5,
        backgroundColor: "#fff",
        padding: 15,
        width: '100%',
        borderRadius: 10,
    },
    error: {
        color: 'red',
        paddingLeft: 15,
        marginBottom: 15,
    },
    btn: {
        backgroundColor: '#ffc300',
        borderRadius: 55,
        padding: 15,
        marginTop: 15,
        width: '100%',
    },
    btntxt: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 60,
    },
});
