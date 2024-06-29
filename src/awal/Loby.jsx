import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Loby = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const categories = [
    { name: 'ML', uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp' },
    { name: 'FF', uri: 'https://wallpapers.com/images/high/free-fire-alok-game-concert-zdz2y3i7qir6091h.webp' },
    { name: 'PUBG', uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp' },
    { name: 'HOK', uri: 'https://wallpapers.com/images/high/anime-gaming-z891kqrphckcklvs.webp' },
    { name: 'COC', uri: 'https://wallpapers.com/images/high/clash_of_-clans_-clan_-connection_-logo-hr1ps7jjcz7g7ygy-2.png' },
    { name: 'ML', uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp' },
    { name: 'FF', uri: 'https://wallpapers.com/images/high/free-fire-alok-game-concert-zdz2y3i7qir6091h.webp' },
    { name: 'PUBG', uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp' },
    { name: 'HOK', uri: 'https://wallpapers.com/images/high/anime-gaming-z891kqrphckcklvs.webp' },
    { name: 'COC', uri: 'https://wallpapers.com/images/high/clash_of_-clans_-clan_-connection_-logo-hr1ps7jjcz7g7ygy-2.png' },
    { name: 'ML', uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp' },
    { name: 'FF', uri: 'https://wallpapers.com/images/high/free-fire-alok-game-concert-zdz2y3i7qir6091h.webp' },
    { name: 'PUBG', uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp' },
    { name: 'HOK', uri: 'https://wallpapers.com/images/high/anime-gaming-z891kqrphckcklvs.webp' },
    { name: 'COC', uri: 'https://wallpapers.com/images/high/clash_of_-clans_-clan_-connection_-logo-hr1ps7jjcz7g7ygy-2.png' },
    { name: 'ML', uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp' },
    { name: 'FF', uri: 'https://wallpapers.com/images/high/free-fire-alok-game-concert-zdz2y3i7qir6091h.webp' },
    { name: 'PUBG', uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp' },
    { name: 'HOK', uri: 'https://wallpapers.com/images/high/anime-gaming-z891kqrphckcklvs.webp' },
    { name: 'COC', uri: 'https://wallpapers.com/images/high/clash_of_-clans_-clan_-connection_-logo-hr1ps7jjcz7g7ygy-2.png' },
    { name: 'PUBG', uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp' },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCategoryPress = (category) => {
    navigation.navigate(category.name.toLowerCase());
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.activeHeaderText}>OBE'STORE</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {filteredCategories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.category} onPress={() => handleCategoryPress(category)}>
            <Image source={{ uri: category.uri }} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#2222',
    borderBottomWidth: 5,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 18,
    color: '#000',
  },
  activeHeaderText: {
    fontSize: 20,
    color: '#ff6600',
    fontWeight: 'bold',
  },
  searchBar: {
    padding: 10,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  category: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 5,
  },
  categoryIcon: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
  },
});

export default Loby;
