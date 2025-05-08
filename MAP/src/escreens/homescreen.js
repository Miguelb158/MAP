import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

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
    navigation.navigate('Route', {
      origin: location,
      destination: destination
    });
  };

  // Função de voltar à tela anterior
  const voltar = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calcular Rota</Text>
      <TextInput
        placeholder="Destino"
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
      />
      <Button title="Calcular Rota" onPress={handleNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});

