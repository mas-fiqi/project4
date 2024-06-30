import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Linking } from 'react-native';

const Pengaturan = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Indonesia');
  const [languageExpanded, setLanguageExpanded] = useState(false);
  const [laporanExpanded, setLaporanExpanded] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
    // Implement logic to change theme (if needed)
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    // Implement logic to change language
  };

  const handleWhatsappContact = () => {
    Linking.openURL('https://wa.me/yourphonenumber'); // Ganti dengan nomor WhatsApp yang ingin dihubungi
  };

  const handleGmailContact = () => {
    Linking.openURL('mailto:youremail@gmail.com'); // Ganti dengan alamat email Gmail yang ingin dihubungi
  };

  const handleCreateAccount = () => {
    // Implement navigation or logic for creating an account
    // Example navigation:
    // navigation.navigate('CreateAccountScreen'); // Replace 'CreateAccountScreen' with your screen name for account creation
  };

  const handleLogin = () => {
    // Implement navigation or logic for logging in
    // Example navigation:
    // navigation.navigate('LoginScreen'); // Replace 'LoginScreen' with your screen name for login
  };

  const toggleLanguageExpanded = () => {
    setLanguageExpanded(!languageExpanded);
  };

  const toggleLaporanExpanded = () => {
    setLaporanExpanded(!laporanExpanded);
  };

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, darkMode ? styles.darkTitle : styles.lightTitle]}>Pengaturan</Text>

      <TouchableOpacity onPress={toggleLanguageExpanded}>
        <View style={[styles.settingItem, darkMode ? styles.darkSettingItem : styles.lightSettingItem]}>
          <Text style={[styles.settingText, darkMode ? styles.darkSettingText : styles.lightSettingText]}>Bahasa: {selectedLanguage}</Text>
          {languageExpanded && (
            <>
              <TouchableOpacity onPress={() => changeLanguage('Inggris')}>
                <Text style={[styles.actionText, darkMode ? styles.darkActionText : styles.lightActionText]}>Inggris</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeLanguage('Cina')}>
                <Text style={[styles.actionText, darkMode ? styles.darkActionText : styles.lightActionText]}>Cina</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeLanguage('Jepang')}>
                <Text style={[styles.actionText, darkMode ? styles.darkActionText : styles.lightActionText]}>Jepang</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleLaporanExpanded}>
        <View style={[styles.settingItem, darkMode ? styles.darkSettingItem : styles.lightSettingItem]}>
          <Text style={[styles.settingText, darkMode ? styles.darkSettingText : styles.lightSettingText]}>Laporan</Text>
          {laporanExpanded && (
            <>
              <TouchableOpacity onPress={handleWhatsappContact}>
                <Text style={[styles.actionText, darkMode ? styles.darkActionText : styles.lightActionText]}>Kontak via WhatsApp</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleGmailContact}>
                <Text style={[styles.actionText, darkMode ? styles.darkActionText : styles.lightActionText]}>Kontak via Gmail</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </TouchableOpacity>

      <View style={[styles.settingItem, darkMode ? styles.darkSettingItem : styles.lightSettingItem]}>
        <Text style={[styles.settingText, darkMode ? styles.darkSettingText : styles.lightSettingText]}>Tema Gelap</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={darkMode}
        />
      </View>

      <View style={[styles.accountItem, darkMode ? styles.darkAccountItem : styles.lightAccountItem]}>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={[styles.actionText, darkMode ? styles.darkActionText : styles.lightActionText]}>Buat Akun</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.accountItem, darkMode ? styles.darkAccountItem : styles.lightAccountItem]}>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={[styles.actionText, darkMode ? styles.darkActionText : styles.lightActionText]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  lightContainer: {
    backgroundColor: '#f9f9f9',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lightTitle: {
    color: '#2e7d32',
  },
  darkTitle: {
    color: '#4caf50',
  },
  settingItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  lightSettingItem: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  darkSettingItem: {
    backgroundColor: '#424242',
  },
  settingText: {
    fontSize: 18,
    color: '#3e4a59',
  },
  lightSettingText: {
    color: '#3e4a59',
  },
  darkSettingText: {
    color: '#ccc',
  },
  actionText: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 5,
  },
  lightActionText: {
    color: '#007bff',
  },
  darkActionText: {
    color: '#90caf9',
  },
  accountItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  lightAccountItem: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  darkAccountItem: {
    backgroundColor: '#424242',
  },
});

export default Pengaturan;
