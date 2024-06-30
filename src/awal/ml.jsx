import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const Ml = ({ navigation }) => {
  const [selectedDiamond, setSelectedDiamond] = useState(null);

  const diamondOptions = [
    { amount: 5, price: 'Rp1.500' },
    { amount: 10, price: 'Rp2.850' },
    { amount: 14, price: 'Rp3.800' },
    { amount: 18, price: 'Rp4.750' },
    { amount: 36, price: 'Rp9.500' },
    { amount: 74, price: 'Rp18.400' },
    { amount: 220, price: 'Rp55.000' },
    { amount: 366, price: 'Rp91.500' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp' }} style={styles.logo} />
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
        <Image source={{ uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp' }} style={styles.banner} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Masukkan User ID</Text>
        <TextInput placeholder="Masukkan User ID" style={styles.input} />
        <TextInput placeholder="Server ID game" style={styles.input} />
        <Text style={styles.infoText}>
          Anda dapat menemukan Game User ID Anda dengan membuka Aplikasi Game Anda dan membuka Profile Setting dengan menekan Profile Picture di Home Screen. Game User ID Anda akan berada di bagian atas seperti gambar di bawah.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Pilih Jumlah</Text>
        <View style={styles.diamondsContainer}>
          {diamondOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.diamondOption,
                selectedDiamond === option.amount && styles.selectedDiamondOption,
              ]}
              onPress={() => setSelectedDiamond(option.amount)}
            >
              <Text style={styles.diamondText}>{option.amount} Diamonds</Text>
              <Text style={styles.priceText}>{option.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('mlbayar')}>
        <Text style={styles.continueButtonText}>LANJUTKAN</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.infoText}>
          MOBA Bang Bang adalah game 5v5 melawan pemain manusia lain. Pilih karakter favoritmu dan undang teman untuk bergabung ke tim! Dalam 10 menit, hancurkan tower dan kalahkan lawan!
        </Text>
        <Text style={styles.sectionTitle}>Download Mobile Legends: Bang Bang</Text>
        <View style={styles.downloadLinks}>
          <TouchableOpacity>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png' }} style={styles.downloadLink} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Available_on_the_App_Store_%28black%29.svg/2560px-Available_on_the_App_Store_%28black%29.svg.png' }} style={styles.downloadLink} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Top Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Kepesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Help</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Jika Anda mengalami masalah, silakan hubungi kami melalui email support masfiqi2@gmail.com.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3498db',
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
    backgroundColor: '#2980b9',
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
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#ecf0f1',
  },
  diamondsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  diamondOption: {
    width: '48%',
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedDiamondOption: {
    backgroundColor: '#27ae60',
  },
  diamondText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  priceText: {
    fontSize: 14,
    color: '#2980b9',
  },
  continueButton: {
    backgroundColor: '#27ae60',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    margin: 10,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  downloadLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  downloadLink: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3498db',
    paddingVertical: 10,
    margin: 10,
    borderRadius: 10,
  },
  navButton: {
    padding: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  footer: {
    backgroundColor: '#2980b9',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Ml;
