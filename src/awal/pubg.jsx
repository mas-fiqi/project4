import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const App = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountPassword, setAccountPassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp' }} style={styles.logo} />
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
        <Image source={{ uri: 'https://wallpapers.com/images/high/pubg-squad-cool-to-be-hot-skin-6k7q9qx951vya9vt.webp' }} style={styles.banner} />
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
          <TouchableOpacity
            style={[
              styles.diamondOption,
              selectedDiamond === '5' && styles.selectedDiamondOption
            ]}
            onPress={() => setSelectedDiamond('5')}
          >
            <Text style={styles.diamondText}>5 Diamonds</Text>
            <Text style={styles.priceText}>Rp1.500</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.diamondOption,
              selectedDiamond === '10' && styles.selectedDiamondOption
            ]}
            onPress={() => setSelectedDiamond('10')}
          >
            <Text style={styles.diamondText}>10 Diamonds</Text>
            <Text style={styles.priceText}>Rp2.850</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.diamondOption,
              selectedDiamond === '14' && styles.selectedDiamondOption
            ]}
            onPress={() => setSelectedDiamond('14')}
          >
            <Text style={styles.diamondText}>14 Diamonds</Text>
            <Text style={styles.priceText}>Rp3.800</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.diamondOption,
              selectedDiamond === '18' && styles.selectedDiamondOption
            ]}
            onPress={() => setSelectedDiamond('18')}
          >
            <Text style={styles.diamondText}>18 Diamonds</Text>
            <Text style={styles.priceText}>Rp4.750</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.diamondOption,
              selectedDiamond === '36' && styles.selectedDiamondOption
            ]}
            onPress={() => setSelectedDiamond('36')}
          >
            <Text style={styles.diamondText}>36 Diamonds</Text>
            <Text style={styles.priceText}>Rp9.500</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.diamondOption,
              selectedDiamond === '74' && styles.selectedDiamondOption
            ]}
            onPress={() => setSelectedDiamond('74')}
          >
            <Text style={styles.diamondText}>74 Diamonds</Text>
            <Text style={styles.priceText}>Rp18.400</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.diamondOption,
              selectedDiamond === '220' && styles.selectedDiamondOption
            ]}
            onPress={() => setSelectedDiamond('220')}
          >
            <Text style={styles.diamondText}>220 Diamonds</Text>
            <Text style={styles.priceText}>Rp55.000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.diamondOption,
              selectedDiamond === '366' && styles.selectedDiamondOption
            ]}
            onPress={() => setSelectedDiamond('366')}
          >
            <Text style={styles.diamondText}>366 Diamonds</Text>
            <Text style={styles.priceText}>Rp91.500</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Pilih Metode Pembayaran</Text>
        <View style={styles.paymentMethodsContainer}>
          <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPaymentMethod('Credit Card')}>
            <Text style={styles.paymentText}>Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPaymentMethod('Debit Card')}>
            <Text style={styles.paymentText}>Debit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPaymentMethod('PayPal')}>
            <Text style={styles.paymentText}>PayPal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPaymentMethod('Google Pay')}>
            <Text style={styles.paymentText}>Google Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPaymentMethod('Apple Pay')}>
            <Text style={styles.paymentText}>Apple Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPaymentMethod('Dana')}>
            <Text style={styles.paymentText}>Dana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPaymentMethod('ShopeePay')}>
            <Text style={styles.paymentText}>ShopeePay</Text>
          </TouchableOpacity>
        </View>
        {(selectedPaymentMethod === 'Dana' || selectedPaymentMethod === 'ShopeePay'|| selectedPaymentMethod === 'PayPal'|| selectedPaymentMethod === 'Apple Pay'|| selectedPaymentMethod === 'Google Pay'|| selectedPaymentMethod === 'Debit Card'|| selectedPaymentMethod === 'Credit Card') && (
          <View style={styles.accountDetailsContainer}>
            <TextInput
              placeholder="Masukkan Nomor Akun"
              value={accountNumber}
              onChangeText={setAccountNumber}
              style={styles.input}
            />
            <TextInput
              placeholder="Masukkan Kata Sandi"
              value={accountPassword}
              onChangeText={setAccountPassword}
              style={styles.input}
              secureTextEntry
            />
          </View>
        )}
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>LANJUTKAN</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.infoText}>
        PUBG Mobile adalah game battle royale lainnya di mana 100 pemain mendarat di sebuah pulau, mencari senjata, kendaraan, dan perlengkapan untuk bertahan hidup. Tujuan utamanya adalah menjadi yang terakhir bertahan hidup di medan perang yang semakin sempit.!
        </Text>
        <Text style={styles.sectionTitle}>Download Clash of Clans:Clash of Clans</Text>
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
  paymentMethodsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  paymentOption: {
    width: '48%',
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  accountDetailsContainer: {
    marginTop: 10,
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

export default App;
