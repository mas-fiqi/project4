// App.jsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Awal/Home'; // Ubah sesuai dengan nama file yang Anda gunakan untuk HomeScreen
import ml from './Awal/ml'; // Import ml.jsx di sini
import Loby from './Awal/Loby'; // Import Loby jika diperlukan
import Pengaturan from './Awal/Pengaturan'; // Import Pengaturan jika diperlukan
import ff from './Awal/ff';
import pubg from './Awal/pubg';
import coc from './Awal/coc';
import hok from './Awal/hok';
import mlbayar from './Awal/mlbayar';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator screenOptions={{ tabBarActiveTintColor: 'green' }}>
      <Tabs.Screen
        name="Home"
        component={Home} // Ganti dengan komponen yang menampilkan HomeScreen Anda
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Loby"
        component={Loby}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ml"
          component={ml}
          options={{ title: 'Mobile Legends' }} // Ubah judul sesuai kebutuhan Anda
        />
        <Stack.Screen
          name="ff"
          component={ff}
          options={{ title: 'fre fre' }} // Ubah judul sesuai kebutuhan Anda
        />
        <Stack.Screen
          name="pubg"
          component={pubg}
          options={{ title: 'PUBG mobile' }} // Ubah judul sesuai kebutuhan Anda
        />
                <Stack.Screen
          name="coc"
          component={coc}
          options={{ title: 'Clan of clans' }} // Ubah judul sesuai kebutuhan Anda
        />
                <Stack.Screen
          name="hok"
          component={hok}
          options={{ title: 'Honor of kings' }} // Ubah judul sesuai kebutuhan Anda
        />
        <Stack.Screen
          name="mlbayar"
          component={mlbayar}
          options={{ title: 'Mobile legends' }} // Ubah judul sesuai kebutuhan Anda
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});

