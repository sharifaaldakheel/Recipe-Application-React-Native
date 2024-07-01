import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icons from "react-native-heroicons/solid";
import { categories } from './index.js';
import { foodItems } from './index.js';
import { SaladItems } from './index.js';
import { ProteinItems } from './index.js';
import { DessertItems } from './index.js';
import { useNavigation, DrawerActions } from '@react-navigation/native';


export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(0);
  const navigation = useNavigation();

  const scrollViewRef = useRef(null);
  const foodRef = useRef(null);
  const saladRef = useRef(null);
  const proteinRef = useRef(null);
  const dessertRef = useRef(null);

  const handleCategoryPress = (index) => {
    setActiveCategory(index);
    let ref;
    switch (index) {
      case 0:
        ref = foodRef;
        break;
      case 1:
        ref = saladRef;
        break;
      case 2:
        ref = proteinRef;
        break;
      case 3:
        ref = dessertRef;
        break;
      default:
        break;
    }

    if (ref && ref.current) {
      ref.current.measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({ y, animated: true });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity 
          style={styles.user} 
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Icons.UserIcon style={styles.userIcon} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Welcome To Our Recipe Hub</Text>
          <Text style={styles.subHeading}>Discover delicious recipes to satisfy every craving and spark your culinary creativity!</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Random Recipe')} style={styles.btn}>
            <Text style={styles.btntxt}>Excited to try something new? 🚀</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          {
            categories.map((category, index) => {
              return (
                <TouchableOpacity key={index} style={styles.category} onPress={() => handleCategoryPress(index)}>
                  <Text style={[styles.ctgText, activeCategory === index && { color: '#ffc300' }]}>
                    {category}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>

        <ScrollView ref={scrollViewRef}>
          <View ref={foodRef} style={styles.gridContainer}>
            {
              foodItems.map((item) => (
                <TouchableOpacity key={item.id} style={styles.itemContainer}
                  onPress={() => navigation.navigate(item.navigateTo)}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.time}>Preparation Time: {item.prep}</Text>
                </TouchableOpacity>
              ))
            }
          </View>

          <View ref={saladRef} style={styles.gridContainer}>
            {
              SaladItems.map((item) => (
                <TouchableOpacity key={item.id} style={styles.itemContainer}
                  onPress={() => navigation.navigate(item.navigateTo)}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.time}>Preparation Time: {item.prep}</Text>
                </TouchableOpacity>
              ))
            }
          </View>

          <View ref={proteinRef} style={styles.gridContainer}>
            {
              ProteinItems.map((item) => (
                <TouchableOpacity key={item.id} style={styles.itemContainer}
                  onPress={() => navigation.navigate(item.navigateTo)}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.time}>Preparation Time: {item.prep}</Text>
                </TouchableOpacity>
              ))
            }
          </View>

          <View ref={dessertRef} style={styles.gridContainer}>
            {
              DessertItems.map((item) => (
                <TouchableOpacity key={item.id} style={styles.itemContainer}
                  onPress={() => navigation.navigate(item.navigateTo)}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.time}>Preparation Time: {item.prep}</Text>
                </TouchableOpacity>
              ))
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#262626',
    },
    user: {
        backgroundColor: "#ffc300",
        flexDirection: 'row', 
        alignItems: 'flex-start',  
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 30,
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
    userIcon: {
        color: "#fff",
        height: 30,
        width: 30,
    },
    heading: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        fontWeight: 'bold',
        paddingTop: 65,
        paddingBottom: 25,
    },
    subHeading: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
    },
    btn: {
        backgroundColor: '#ffc300',
        borderRadius: 55,
        margin: 15,
        padding: 15,
    },
    btntxt: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
    },
    category: {
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        paddingTop: 30,
        marginRight: 20,
        marginLeft: 20,
        height: "50%",
    },
    ctgText: {
        color: "#fff",
        fontSize: 22,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 40,
    },
    itemContainer: {
        width: '48%',
        marginBottom: 10, 
    },
    image: {
        width: '100%', 
        height: 150, 
        marginBottom: 5,
        borderRadius: 10,
        borderColor: "#ffc300",
        borderWidth: 1,
    },
    title: {
        fontSize: 22,
        color: "#ffc300",
    },
    time: {
        color: "#FFF",
        paddingBottom: 15,
    },
});
