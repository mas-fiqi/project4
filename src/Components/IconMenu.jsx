import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const IconMenu = ({ label, icon, isActive }) => {
  return (
    <TouchableOpacity style={[styles.container, isActive ? styles.activeContainer : null]}>
      <View style={styles.box}>
        <Image source={{ uri: icon }} style={styles.image} />
      </View>
      <Text style={styles.textIcon}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconMenu;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 5,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeContainer: {
    backgroundColor: 'lightblue',
  },
  box: {
    borderWidth: 1,
    width: 99,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  image: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
  },
  textIcon: {
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
  },
});

