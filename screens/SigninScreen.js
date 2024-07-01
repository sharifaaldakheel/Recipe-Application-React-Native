import React, { useState, useEffect  } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import TextInput from 'react-native-text-input-interactive';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native'; 
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SigninScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);


    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    });

    const auth = FIREBASE_AUTH;

    const SignIn = async (email, password) => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword (auth, email, password);
            console.log(response);
            alert('Welcome!');
            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            alert('SignUp Failed!' + error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            
            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('SignUp')}>
             <Icons.ArrowLeftIcon style={styles.backIcon}/>
            </TouchableOpacity>

           <Image source={require('./003.png')} style={styles.image} />
           <Text style={styles.welcoming}>Happy to see you again!</Text>

           <Formik
               initialValues={{ email: '', password: '' }}
               validationSchema={validationSchema}
               onSubmit={(values) => { 
                SignIn(values.email, values.password);
               }}>

               {formikProps => (
                   <React.Fragment>
                       <View style={styles.form}>
                           <View style={styles.regForm}>
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

                               <TouchableOpacity>
                                   <Text style={styles.pass}>Forget Password?</Text>
                               </TouchableOpacity>

                               {loading ? (
                                <ActivityIndicator />
                                 ) : (
                                    <TouchableOpacity
                                      style={styles.btn}
                                      onPress={formikProps.handleSubmit}
                                      disabled={loading}>
                                      <Text style={styles.btntxt}>Sign in</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                       </View>
                   </React.Fragment>
                    )}
           </Formik>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
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
    image: {
        resizeMode: "contain",
        marginTop: "70%",
        height: "46%",
        alignSelf: 'center',
        aspectRatio: 1,
    },
    welcoming: {
        color: "#ffc300",
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    form: {
        backgroundColor: "#fff",
        height: "80%",
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingLeft: 10,
        paddingRight: 10,
    },
    regForm: {
        marginTop: 30,
        marginBottom: 30,
    },
    info: {
        marginBottom: 5,
        alignSelf: 'flex-start',
        paddingLeft: 15,
    },
    input: {
        marginBottom: 15,
        alignSelf: 'flex-start',
        paddingLeft: 5,
    },
    error: {
        color: 'red',
        paddingLeft: 15,
        marginBottom: 15,
    },
    pass: {
        color: 'gray',
        alignSelf: 'flex-end',
        paddingRight: 15,
        paddingBottom: 25,
    },
    btn: {
        backgroundColor: '#ffc300',
        borderRadius: 55,
        padding: 15,
        marginTop: 50,
    },
    btntxt: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
    }
});
