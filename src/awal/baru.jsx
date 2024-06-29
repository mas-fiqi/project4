import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DANA</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>MASUK</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: 'https://yourimageurl.com/banner.jpg' }}
        style={styles.banner}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Paling Populer</Text>
        <View style={styles.items}>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://yourimageurl.com/freefire.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Free Fire</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://yourimageurl.com/googleplay.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Kode Voucher Google Play</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://yourimageurl.com/mobilelegends.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Mobile Legends: Bang Bang</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Games</Text>
        <View style={styles.items}>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://yourimageurl.com/mobilelegends.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Mobile Legends: Bang Bang</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://yourimageurl.com/freefire.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Free Fire</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://yourimageurl.com/pubg.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>PUBG Mobile</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Digital Voucher</Text>
        <View style={styles.items}>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://yourimageurl.com/googleplay.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Kode Voucher Google Play</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://yourimageurl.com/vidio.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>Vidio</Text>
          </View>
          <View style={styles.item}>
            <Image
              source={{ uri: 'https://yourimageurl.com/unipin.jpg' }}
              style={styles.itemImage}
            />
            <Text style={styles.itemText}>UniPin Voucher</Text>
          </View>
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

export default App;
