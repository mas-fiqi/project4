import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  FlatList,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const banners = [
    'https://assets.ggwp.id/2021/03/kapan-event-515-mobile-legend-2021.jpg',
    'https://i0.wp.com/www.lapakgaming.com/blog/id-id/wp-content/uploads/2024/05/event-MLBB-Jujutsu-Kaisen-2024.webp?fit=1643%2C924&ssl=1',
    'https://cdn.oneesports.id/cdn-data/sites/2/2024/03/MLBB_ALLSTAR_2024_exclusiveskins-1024x576-1.jpg',
    'https://i.ytimg.com/vi/okvRKLhgMU8/maxresdefault.jpg',
    'https://esports.id/img/article/598420240124072208.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 2000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: currentIndex, animated: true});
    }
  }, [currentIndex]);

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

      <FlatList
        ref={flatListRef}
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.banner} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Paling Populer</Text>
        <View style={styles.items}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ff')}>
            <Image
              source={{
                uri: 'https://wallpapers.com/images/high/free-fire-alok-game-concert-zdz2y3i7qir6091h.webp',
              }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Free Fire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('pubg')}>
            <Image
              source={{
                uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp',
              }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>PUBG mobile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ml')}>
            <Image
              source={{
                uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp',
              }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Mobile Legends: Bang Bang</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Games</Text>
        <View style={styles.items}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ml')}>
            <Image
              source={{
                uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp',
              }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Mobile Legends: Bang Bang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ff')}>
            <Image
              source={{
                uri: 'https://wallpapers.com/images/high/free-fire-alok-game-concert-zdz2y3i7qir6091h.webp',
              }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Free Fire</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('pubg')}>
            <Image
              source={{
                uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp',
              }}
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
              source={{
                uri: 'https://cdn1-production-images-kly.akamaized.net/FW_pbCKNMxDTn3cV0icP3XgBx2o=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4100889/original/081579600_1658802835-Google_Play1.jpg',
              }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Kode Voucher Google Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleDanaPress}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/f5/8c/a3/f58ca3528b238877e9855fcac1daa328.jpg',
              }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Kode Vocer Dana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={handleGoPayPress}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/94/3c/97/943c971903518e53ffd324dd51e46a90.jpg',
              }}
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
    backgroundColor: '#fceade',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2e7d32',
  },
  headerText: {
    fontSize: 20,
    color: '#ffff',
  },
  loginButton: {
    paddingVertical: 5,
    paddingHorizontal: 100,
    backgroundColor: '#ffeb3b',
    borderRadius: 15,
  },
  loginButtonText: {
    color: '#2e7d32',
  },
  banner: {
    width: width, // Menggunakan lebar layar penuh
    height: 200,
  },
  section: {
    padding: 5,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#14080e', // Warna teks judul
    fontWeight: 'bold', // Style teks tebal
    textAlign: 'center', // Posisi teks menjadi tengah
    backgroundColor: '#3a7ca5', // Warna latar belakang judul
    paddingVertical: 5, // Padding atas dan bawah judul
    borderRadius: 10, // Sudut bulat judul
    elevation: 3, // Efek bayangan
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '30%',
    margin: '1.5%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 999, height: 15},
    shadowRadius: 5,
    elevation: 3,
  },
  itemImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  itemText: {
    marginTop: 5,
    textAlign: 'center',
    color: '#2e7d32', // Warna teks item
  },
});

export default HomeScreen;
