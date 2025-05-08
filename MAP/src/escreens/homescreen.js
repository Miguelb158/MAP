import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const handleNavigate = () => {
    if (!destination || !location) return;
    navigation.navigate('RouteScreen', {
      origin: location,
      destination: destination
    });
  };

  const irParaPerfil = () => {
    navigation.navigate('Perfil');
  };

  const handleLogout = () => {
    navigation.replace('Login'); // Troca para a tela de login
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Ícone de perfil no topo direito */}
      <TouchableOpacity style={styles.profileIcon} onPress={irParaPerfil}>
        <Ionicons name="person-circle-outline" size={36} color="#00796B" />
      </TouchableOpacity>

      <View style={styles.innerContainer}>
        <Text style={styles.title}>Calcular Rota</Text>
        <TextInput
          placeholder="Destino"
          style={styles.input}
          value={destination}
          onChangeText={setDestination}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.botao} onPress={handleNavigate}>
          <Text style={styles.textoBotao}>Calcular Rota</Text>
        </TouchableOpacity>

        {/* Botão de Sair */}
        <TouchableOpacity style={styles.logoutBotao} onPress={handleLogout}>
          <Text style={styles.textoBotao}>Sair</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileIcon: {
    position: 'absolute',
    top: 50,
    right: 30,
    zIndex: 10,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    backgroundColor: '#ffffffcc',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796B',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    borderColor: '#b2dfdb',
    borderWidth: 1,
  },
  botao: {
    width: '100%',
    backgroundColor: '#00796B',
    borderRadius: 25,
    paddingVertical: 14,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  logoutBotao: {
    width: '60%',
    backgroundColor: '#d32f2f',
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
