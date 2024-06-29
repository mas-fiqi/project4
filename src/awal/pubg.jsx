import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://wallpapers.com/images/high/pubg-lite-characters-fanart-9kkswr8x8uf4qvur.webp',
          }}
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Text style={styles.icon}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>≡</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://wallpapers.com/images/high/pubg-lite-characters-fanart-9kkswr8x8uf4qvur.webp',
          }}
          style={styles.banner}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Masukkan User ID</Text>
        <TextInput placeholder="Masukkan User ID" style={styles.input} />
        <TextInput placeholder="Server ID game" style={styles.input} />
        <Text style={styles.infoText}>
          Anda dapat menemukan Game User ID Anda dengan membuka Aplikasi Game
          Anda dan membuka Profile Setting dengan menekan Profile Picture di
          Home Screen. Game User ID Anda akan berada di bagian atas seperti
          gambar di bawah.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Pilih Jumlah</Text>
        <View style={styles.diamondsContainer}>
          <TouchableOpacity style={styles.diamondOption}>
            <Text style={styles.diamondText}>1077 Usi</Text>
            <Text style={styles.priceText}>Rp1.000.500</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.diamondOption}>
            <Text style={styles.diamondText}>9999 Usi</Text>
            <Text style={styles.priceText}>Rp7.000.850</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.diamondOption}>
            <Text style={styles.diamondText}>568 Usi</Text>
            <Text style={styles.priceText}>Rp300.800</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.diamondOption}>
            <Text style={styles.diamondText}>478 Usi</Text>
            <Text style={styles.priceText}>Rp400.750</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.diamondOption}>
            <Text style={styles.diamondText}>36 Usi</Text>
            <Text style={styles.priceText}>Rp9.500</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.diamondOption}>
            <Text style={styles.diamondText}>74 Usi</Text>
            <Text style={styles.priceText}>Rp18.400</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.diamondOption}>
            <Text style={styles.diamondText}>220 Uis</Text>
            <Text style={styles.priceText}>Rp55.000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.diamondOption}>
            <Text style={styles.diamondText}>366 Usi</Text>
            <Text style={styles.priceText}>Rp91.500</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d3b66',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#034f84',
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    color: '#fff',
    marginHorizontal: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  section: {
    backgroundColor: '#034f84',
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
  },
  diamondsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  diamondOption: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  diamondText: {
    fontSize: 16,
    color: '#000',
  },
  priceText: {
    fontSize: 14,
    color: '#034f84',
  },
});

export default App;
