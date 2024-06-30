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
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#4caf50',
    borderBottomWidth: 12,
    borderBottomColor: '#dcdcdc',
  },
  headerText: {
    fontSize: 18,
    color: '#ffffff',
  },
  activeHeaderText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  searchBar: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    borderColor: '#dcdcdc',
    borderWidth: 1,
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
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  categoryIcon: {
    width: '100%',
    height: 120,
    borderRadius: 15,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#4caf50',
    fontWeight: 'bold',
  },
});

export default Loby;
