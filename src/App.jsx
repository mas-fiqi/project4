import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Awal/Home';
import baru from './Awal/baru';
import baru1 from './Awal/baru1';
import Loby from './Awal/Loby';
import Pengaturan from './Awal/Pengaturan';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'green'}}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Loby"
        component={Loby}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="baru"
        component={baru}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
            <Tabs.Screen
        name="baru1"
        component={baru1}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MenuTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
