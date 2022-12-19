import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CarouselCards from './pages/CarouselCards';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator 
    // screenOptions={{headerShown:false}}
    screenOptions={({ route }) => ({
      headerShown:false,
      tabBarShowLabel:false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Menu') {
          iconName = focused ? 'ios-menu-sharp' : 'ios-menu-outline';
        } 
        else if (route.name === 'Cart'){
          iconName = focused ? 'ios-cart-sharp' : 'ios-cart-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#c89686',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (   
    <ScrollView>  
          <View style={[styles.container,{width: '100%', height: 200, backgroundColor: '#c89686'}]}>
            <Text style={styles.txt}>SPARTAN</Text>
            <Text style={styles.txt1}>FITNESS</Text>
          </View>
          <View style={[styles.container,{width: '100%', height: 485}]}>
            <Text style={styles.txt2}>New Arrivals</Text>
            <CarouselCards></CarouselCards>
          </View>
          <View style={[styles.container,{width: '100%', height: 100}]}>
            <Text style={styles.txt3}>Swipe to View</Text>
          </View>
          <View style={[styles.container, {width: '100%', height: 450}]}>
            <Text style={styles.txt4}>About Us</Text>
            <Text style={[styles.txt5,{width:'85%'}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in nulla leo. Nam a neque odio. Curabitur volutpat gravida dolor, ut suscipit sem condimentum sed. Sed porttitor nulla vitae neque faucibus fringilla. Vestibulum convallis sapien metus</Text>
          </View>
    </ScrollView>
  );
}


function MenuScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Menu/>
    </View>
  );
}

function CartScreen(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Cart/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    backgroundColor:'white',
    
    },
  txt :{
    textAlign:'center',
    marginTop:50,
    fontSize:70,
    letterSpacing:10,
    fontWeight:'bold',
    color:'white',
  },
  txt1:{
    textAlign:'center',
    fontSize:70,
    letterSpacing:9,
    fontWeight:'bold',
    color:'white',
  },
  txt2:{
    fontSize:50,
    paddingVertical:20,
    fontStyle:'italic',
    justifyContent:'center',
  },
  txt3:{
    textAlign:'center',
  },
  txt4:{
    fontSize:50,
    paddingVertical:0,
    paddingBottom:30,
    justifyContent:'center',
  },
  txt5:{
    fontSize:25,
    justifyContent:'center',
    textAlign:'center',
  }
});
