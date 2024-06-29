import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import IconMenu from '../component/IconMenu';

const Data = [
  {
    id: 1,
    label: 'mlb',
    icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    label: 'free fire',
    icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    label: 'PUG',
    icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    label: 'HOK',
    icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    label: 'FC mobile',
    icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Home = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 1) % Data.length);
    }, 900); // Change image every 0.9 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item, index }) => (
          <IconMenu
            label={item.label}
            icon={item.icon}
            isActive={index === activeIndex}
          />
        )}
        horizontal
        keyExtractor={item => item.id.toString()}
        initialScrollIndex={activeIndex}
        getItemLayout={(data, index) => ({
          length: 100, // Horizontal item length (adjust as needed)
          offset: 100 * index,
          index,
        })}
        pagingEnabled // Ensure each item has one image
      />
      <View style={styles.imageRowContainer}>
        {Data.map((item, index) => (
          <Image key={item.id} source={{ uri: item.icon }} style={styles.image} />
        ))}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Loby')}
        style={styles.btn}>
        <Text style={styles.txt}>Loby</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0FFFF', // Light blue background color (Hex code for light blue)
  },
  btn: {
    margin: 170,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  imageRowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 190, // Adjust as needed
    height: 100, // Adjust as needed
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 5,
  },
});

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
// import IconMenu from '../component/IconMenu';

// const Data = [
//   { id: 1, label: 'mlb', icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 2, label: 'free fire', icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 3, label: 'PUG', icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 4, label: 'HOK', icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { id: 5, label: 'FC mobile', icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
// ];

// const Home = ({ navigation }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex(activeIndex => (activeIndex + 1) % Data.length);
//     }, 900); // Ganti gambar setiap 0.9 detik

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <View>
//       <FlatList
//         data={Data}
//         renderItem={({ item, index }) => <IconMenu label={item.label} icon={item.icon} isActive={index === activeIndex} />}
//         horizontal
//         keyExtractor={item => item.id.toString()}
//         initialScrollIndex={activeIndex}
//         getItemLayout={(data, index) => ({
//           length: 100, // Panjang item horizontal (sesuaikan sesuai kebutuhan)
//           offset: 100 * index,
//           index,
//         })}
//         pagingEnabled // Memastikan setiap item memiliki satu gambar
//       />
//       <TouchableOpacity
//         onPress={() => navigation.navigate('Home')}
//         style={styles.btn}>
//         <Text style={styles.txt}>Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   btn: {
//     margin: 10,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     backgroundColor: 'green',
//   },
//   txt: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

// import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
// import React from 'react';
// import IconMenu from '../component/IconMenu';

// const Data = [
//   {id: 1, label: '   mlb', icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
//   {id: 2, label: '     free fire', icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
//   {id: 3, label: '    PUG', icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
//   {id: 4, label: '    HOK', icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
//   {id: 5, label: '   FC mobile', icon: 'https://images.unsplash.com/photo-1606143704644-0dece2c43e54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
// ];

// const Home = ({navigation}) => {
//   return (
//     <View>
//       <FlatList
//         data={Data}
//         renderItem={({item}) => <IconMenu label={item.label} icon={item.icon} />}
//         horizontal={true}
//         keyExtractor={item => item.id.toString()}
//       />
//       <TouchableOpacity
//         onPress={() => navigation.navigate('Home')}
//         style={styles.btn}>
//         <Text style={styles.txt}>Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   btn: {
//     margin: 10,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     backgroundColor: 'green',
//   },
//   txt: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });
