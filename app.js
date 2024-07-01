import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import CustomDrawerLabel from './DrawerContent.js';
import * as Icons from "react-native-heroicons/solid";

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import RandomScreen from './screens/RandomScreen';
import GreekScreen from './screens/GreekScreen';
import CaesarScreen from './screens/CaesarScreen';
import QuinoaScreen from './screens/QuinoaScreen';
import SpinachScreen from './screens/SpinachScreen';
import ChickpeaScreen from './screens/ChickpeaScreen';
import GrilledChickenScreen from './screens/GrilledChickenScreen';
import BeefStirScreen from './screens/BeefStirScreen';
import BakedSalmonScreen from './screens/Baked Salmon';
import LemonChickenScreen from './screens/LemonChickenScreen';
import ShrimpTacosScreen from './screens/ShrimpTacosScreen';
import ButterShrimpScreen from './screens/ButterShrimpScreen';
import ChocolateMousseScreen from './screens/ChocolateMousseScreen';
import CookiesScreen from './screens/CookiesScreen';
import TiramisuScreen from './screens/TiramisuScreen';
import LemonBarScreen from './screens/LemonBarScreen';
import CheesecakeScreen from './screens/CheesecakeScreen';
import CarrotScreen from './screens/CarrotScreen';
import SigninScreen from './screens/SigninScreen';
import EditScreen from './screens/EditScreen.js';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator ();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Home' options={{
          gestureEnabled: false
        }} component={HomeScreen} />
        <Stack.Screen name='SignUp'  component={SignupScreen} />
        <Stack.Screen name='User Pofile'  component={UserScreen} />
        <Stack.Screen name='Random Recipe'  component={RandomScreen} />
        <Stack.Screen name='SignIn' component={SigninScreen} />
        <Stack.Screen name='Edit Information' component={EditScreen} />


        <Stack.Screen name='Acai Bowl' component={AcaiScreen} />
        <Stack.Screen name='Mango Pudding' component={PuddingScreen} />
        <Stack.Screen name='Veggie Wrap' component={WarpScreen} />
        <Stack.Screen name='Vegetarian Chili' component={ChiliScreen} />
        <Stack.Screen name='Grilled Salmon' component={SalmonScreen} />
        <Stack.Screen name='Avocado Toast' component={ToastScreen} />
        <Stack.Screen name='Stir-Fried Tofu' component={TofuScreen} />
        <Stack.Screen name='Greek Salad' component={GreekScreen} />
        <Stack.Screen name='Caesar Salad' component={CaesarScreen} />
        <Stack.Screen name='Quinoa Salad' component={QuinoaScreen} />
        <Stack.Screen name='Strawberry Salad' component={SpinachScreen} />
        <Stack.Screen name='Chickpea Salad' component={ChickpeaScreen} />
        <Stack.Screen name='Grilled Chicken' component={GrilledChickenScreen} />
        <Stack.Screen name='Beef Stir' component={BeefStirScreen} />
        <Stack.Screen name='Baked Salmon' component={BakedSalmonScreen} />
        <Stack.Screen name='Lemon Herb Grilled' component={LemonChickenScreen} />
        <Stack.Screen name='Shrimp Tacos' component={ShrimpTacosScreen} />
        <Stack.Screen name='Butter Shrimp' component={ButterShrimpScreen} />
        <Stack.Screen name='Chocolate Mousse' component={ChocolateMousseScreen} />
        <Stack.Screen name='Cookies' component={CookiesScreen} />
        <Stack.Screen name='Tiramisu' component={TiramisuScreen} />
        <Stack.Screen name='Lemon Bars' component={LemonBarScreen} />
        <Stack.Screen name='Cheesecake' component={CheesecakeScreen} />
        <Stack.Screen name='Carrot' component={CarrotScreen} />

    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: '#262626',
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={StackNavigator}
            options={{
              drawerLabel: ({ focused }) => (
                <CustomDrawerLabel label="Home" focused={focused} />
              ),
              drawerIcon: ({ focused }) => (
                <Icons.HomeIcon size={focused ? 24 : 20} color={focused ? '#FFFFFF' : '#CCCCCC'} />
              ),
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={UserScreen}
            options={{
              drawerLabel: ({ focused }) => (
                <CustomDrawerLabel label="Favorite Recipes" focused={focused} />
              ),
              drawerIcon: ({ focused }) => (
                <Icons.StarIcon size={focused ? 24 : 20} color={focused ? '#FFFFFF' : '#CCCCCC'} />
              ),
            }}
          />
          <Drawer.Screen
            name="RandomRecipe"
            component={RandomScreen}
            options={{
              drawerLabel: ({ focused }) => (
                <CustomDrawerLabel label="Try New Recipe!" focused={focused} />
              ),
              drawerIcon: ({ focused }) => (
                <Icons.SparklesIcon size={focused ? 24 : 20} color={focused ? '#FFFFFF' : '#CCCCCC'} />
              ),
            }}
          />
          <Drawer.Screen
            name="EditInformation"
            component={EditScreen}
            options={{
              drawerLabel: ({ focused }) => (
                <CustomDrawerLabel label="Edit Personal Information" focused={focused} />
              ),
              drawerIcon: ({ focused }) => (
                <Icons.Cog8ToothIcon size={focused ? 24 : 20} color={focused ? '#FFFFFF' : '#CCCCCC'} />
              ),
            }}
          />
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              drawerLabel: ({ focused }) => (
                <CustomDrawerLabel label="Log out" focused={focused} />
              ),
              drawerIcon: ({ focused }) => (
                <Icons.UserIcon size={focused ? 24 : 20} color={focused ? '#FFFFFF' : '#CCCCCC'} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
