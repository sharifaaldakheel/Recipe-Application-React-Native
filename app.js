import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeSreen';
import WelcomeScreen from './screens/Welcome';
import SignupScreen from './screens/signUp';
import AcaiScreen from './screens/AcaiScreen';
import PuddingScreen from './screens/PuddingScreen';
import WarpScreen from './screens/WarpScreen';
import ChiliScreen from './screens/ChiliScreen';
import SalmonScreen from './screens/SalmonScreen';
import ToastScreen from './screens/ToastScreen';
import TofuScreen from './screens/TofuScreen';
import UserScreen from './screens/userProfile';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
        <Stack.Screen name='Home'  component={HomeScreen} />
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='SignUp'  component={SignupScreen} />
        <Stack.Screen name='User Pofile'  component={UserScreen} />


        <Stack.Screen name='Acai Bowl'  component={AcaiScreen} />
        <Stack.Screen name='Mango Pudding'  component={PuddingScreen} />
        <Stack.Screen name='Veggie Wrap' component={WarpScreen} />
        <Stack.Screen name='Vegetarian Chili'  component={ChiliScreen} />
        <Stack.Screen name='Grilled Salmon'  component={SalmonScreen} />
        <Stack.Screen name='Avocado Toast'  component={ToastScreen} />
        <Stack.Screen name='Stir-Fried Tofu'  component={TofuScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
