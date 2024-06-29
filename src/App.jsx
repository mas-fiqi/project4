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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Home from './Awal/Home';
// import Loby from './Awal/Loby';
// import Pengaturan from './Awal/Pengaturan';
// import ml from './Awal/ml';
// import mobilegen from './Awal/mobilegen';

// const Stack = createNativeStackNavigator();
// const Tabs = createBottomTabNavigator();

// const MenuTab = () => {
//   return (
//     <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'green'}}>
//       <Tabs.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({size, color}) => (
//             <MaterialCommunityIcons name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Loby"
//         component={Loby}
        
//         options={{
//           tabBarIcon: ({size, color}) => (
//             <MaterialCommunityIcons name="cog" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Pengaturan"
//         component={Pengaturan}
//         options={{
//           tabBarIcon: ({size, color}) => (
//             <MaterialCommunityIcons name="account" size={size} color={color} />
//           ),
//         }}
//       />

//             {/* <Tabs.Screen
//         name="ml"
//         component={ml}

//       /> */}
//     </Tabs.Navigator>
//   );
// };

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Main"
//           component={MenuTab}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// const styles= StyleSheet.create({});
