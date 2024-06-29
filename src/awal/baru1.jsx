import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Pilihan</Text>
        <Text style={styles.headerText}>Tema</Text>
        <Text style={styles.activeHeaderText}>Wallpaper</Text>
        <Text style={styles.headerText}>Nada dering</Text>
        <Text style={styles.headerText}>Humor</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
        />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'https://yourimageurl.com/kategori.png' }} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>Kategori</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'https://yourimageurl.com/terbaru.png' }} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>Terbaru</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'https://yourimageurl.com/alam.png' }} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>Alam</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'https://yourimageurl.com/karakter.png' }} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>Karakter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Image source={{ uri: 'https://yourimageurl.com/top.png' }} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>Top</Text>
        </TouchableOpacity>
      </View>

      {/* Wallpapers */}
      <View style={styles.wallpapers}>
        <View style={styles.wallpaperRow}>
          <Image source={{ uri: 'https://yourimageurl.com/wallpaper1.jpg' }} style={styles.wallpaper} />
          <Image source={{ uri: 'https://yourimageurl.com/wallpaper2.jpg' }} style={styles.wallpaper} />
        </View>
        <View style={styles.wallpaperRow}>
          <Image source={{ uri: 'https://yourimageurl.com/wallpaper3.jpg' }} style={styles.wallpaper} />
          <Image source={{ uri: 'https://yourimageurl.com/wallpaper4.jpg' }} style={styles.wallpaper} />
        </View>
        <View style={styles.wallpaperRow}>
          <Image source={{ uri: 'https://yourimageurl.com/wallpaper5.jpg' }} style={styles.wallpaper} />
          <Image source={{ uri: 'https://yourimageurl.com/wallpaper6.jpg' }} style={styles.wallpaper} />
        </View>
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
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 16,
    color: '#000',
  },
  activeHeaderText: {
    fontSize: 16,
    color: '#ff6600',
  },
  searchBar: {
    padding: 10,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  category: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
  },
  wallpapers: {
    padding: 10,
  },
  wallpaperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  wallpaper: {
    width: '48%',
    height: 200,
    borderRadius: 10,
  },
});

export default App;
