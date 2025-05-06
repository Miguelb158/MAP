// src/escreens/homescreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [distancia, setDistancia] = useState('');
  const [tempo, setTempo] = useState('');
  const navigation = useNavigation();

  const calcularDistancia = () => {
    // Simulação de cálculo simples
    const km = Math.floor(Math.random() * 100) + 1;
    const min = km * 2;

    setDistancia(`${km} km`);
    setTempo(`${min} minutos`);
  };

  const salvarHistorico = async () => {
    // Aqui você pode salvar no Firestore mais tarde
    navigation.navigate('Perfil', {
      origem,
      destino,
      distancia,
      tempo
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcular Rota</Text>
      <TextInput placeholder="Origem" style={styles.input} value={origem} onChangeText={setOrigem} />
      <TextInput placeholder="Destino" style={styles.input} value={destino} onChangeText={setDestino} />
      <Button title="Calcular" onPress={calcularDistancia} />
      {distancia !== '' && (
        <View style={styles.result}>
          <Text>Distância: {distancia}</Text>
          <Text>Tempo estimado: {tempo}</Text>
          <Button title="Salvar e ir para Perfil" onPress={salvarHistorico} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  result: { marginTop: 20, alignItems: 'center' }
});
