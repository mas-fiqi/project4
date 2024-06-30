import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const mlbayar = ({ navigation }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://wallpapers.com/images/high/mobile-legends-floral-knight-lancelot-wm83mpf71jwlcegb.webp' }} style={styles.logo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.icon}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>≡</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Metode Pembayaran</Text>
        <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPayment('Kartu Kredit/Debit')}>
          <Text style={styles.paymentText}>Kartu Kredit/Debit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPayment('Transfer Bank')}>
          <Text style={styles.paymentText}>Transfer Bank</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPayment('E-Wallet')}>
          <Text style={styles.paymentText}>E-Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPayment('Pulsa')}>
          <Text style={styles.paymentText}>Pulsa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPayment('Dana')}>
          <Text style={styles.paymentText}>Dana</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPayment('OVO')}>
          <Text style={styles.paymentText}>OVO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption} onPress={() => setSelectedPayment('ShopeePay')}>
          <Text style={styles.paymentText}>ShopeePay</Text>
        </TouchableOpacity>
      </View>
      {selectedPayment && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detail Pembayaran untuk {selectedPayment}</Text>
          <TextInput
            placeholder="Masukkan nomor akun"
            style={styles.input}
            value={accountNumber}
            onChangeText={setAccountNumber}
          />
          <TextInput
            placeholder="Masukkan sandi"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      )}
      <TouchableOpacity style={styles.continueButton} onPress={() => {/* Handle payment confirmation */}}>
        <Text style={styles.continueButtonText}>KONFIRMASI PEMBAYARAN</Text>
      </TouchableOpacity>
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
  paymentOption: {
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  paymentText: {
    fontSize: 16,
    color: '#2c3e50',
  },
  input: {
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
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
});

export default mlbayar;
