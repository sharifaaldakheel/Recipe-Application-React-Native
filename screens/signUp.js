import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import TextInput from 'react-native-text-input-interactive';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignupScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const validationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
    });

    const auth = FIREBASE_AUTH;

    const SignUp = async (email, password) => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
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
        <View style={styles.container}>
            <ScrollView>
                <Image source={require('./002.png')} style={styles.image} />
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        SignUp(values.email, values.password);
                    }}>
                    {formikProps => (
                        <React.Fragment>
                            <View style={styles.form}>
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


                                    <View style={styles.row}>
                                        <TouchableOpacity>
                                            <Text style={styles.pass}>Forget Password?</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                                            <Text style={styles.acc}>Already have an account</Text>
                                        </TouchableOpacity>
                                    </View>

                                    
                                    {loading ? (
                                        <ActivityIndicator />
                                    ) : (
                                        <TouchableOpacity
                                            style={styles.btn}
                                            onPress={formikProps.handleSubmit}>
                                            <Text style={styles.btntxt}>Create an Account</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </View>
                        </React.Fragment>
                    )}
                </Formik>
            </ScrollView>
        </View>
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
    image: {
        height: 360,
        width: 360,
        alignSelf: 'center',
    },
    form: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingLeft: 15,
        paddingRight: 15,
        zIndex:100,
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15,
    },
    pass: {
        color: 'gray',
        alignSelf: 'flex-end',
    },
    acc: {
        color: '#0077AA',
        alignSelf: 'flex-start',
    },
    btn: {
        backgroundColor: '#ffc300',
        borderRadius: 55,
        padding: 15,
        marginTop: 15,
    },
    btntxt: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
    }
});
