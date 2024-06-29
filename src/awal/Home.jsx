import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleMasukPress = () => {
    navigation.navigate('Loby'); // Ubah sesuai dengan nama screen yang tepat
  };

  const handleGooglePlayPress = () => {
    Linking.openURL('https://play.google.com/store'); // URL Google Play Store
  };

  const handleDanaPress = () => {
    Linking.openURL('https://www.dana.id/'); // URL Dana
  };

  const handleGoPayPress = () => {
    Linking.openURL('https://www.gojek.com/gopay/'); // URL GoPay
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>OBE'STORE</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleMasukPress}>
          <Text style={styles.loginButtonText}>MASUK</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp' }}
        style={styles.banner}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Paling Populer</Text>
        <View style={styles.items}>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ff')}>
            <Image
              source={{ uri: 'https://wallpapers.com/images/high/free-fire-alok-game-concert-zdz2y3i7qir6091h.webp' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Free Fire</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('pubg')}>
            <Image
              source={{ uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>PUBG mobile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ml')}>
            <Image
              source={{ uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Mobile Legends: Bang Bang</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Games</Text>
        <View style={styles.items}>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ml')}>
            <Image
              source={{ uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Mobile Legends: Bang Bang</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ff')}>
            <Image
              source={{ uri: 'https://wallpapers.com/images/high/free-fire-alok-game-concert-zdz2y3i7qir6091h.webp' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Free Fire</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('pubg')}>
            <Image
              source={{ uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>PUBG Mobile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Digital Voucher</Text>
        <View style={styles.items}>
          <TouchableOpacity style={styles.item} onPress={handleGooglePlayPress}>
            <Image
              source={{ uri: 'https://cdn1-production-images-kly.akamaized.net/FW_pbCKNMxDTn3cV0icP3XgBx2o=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4100889/original/081579600_1658802835-Google_Play1.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Kode Voucher Google Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleDanaPress}>
            <Image
              source={{ uri: 'https://i.pinimg.com/736x/f5/8c/a3/f58ca3528b238877e9855fcac1daa328.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Kode Vocer Dana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleGoPayPress}>
            <Image
              source={{ uri: 'https://i.pinimg.com/736x/94/3c/97/943c971903518e53ffd324dd51e46a90.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Voucher GoPay</Text>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#007bff',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  loginButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#007bff',
  },
  banner: {
    width: '100%',
    height: 200,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '30%',
    margin: '1.5%',
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  itemText: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default HomeScreen;
