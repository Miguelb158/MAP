// src/escreens/homescreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [distancia, setDistancia] = useState('');
  const [tempo, setTempo] = useState('');
  const navigation = useNavigation();

  // Função de cálculo de distância e tempo (simulado)
  const calcularDistancia = () => {
    if (!origem || !destino) {
      alert('Por favor, insira origem e destino!');
      return;
    }

    // Cálculo simulado (1 km = 2 minutos de tempo)
    const distanciaSimulada = Math.floor(Math.random() * 100) + 1; // Distância aleatória entre 1 a 100 km
    const tempoSimulado = distanciaSimulada * 2; // Tempo é o dobro da distância em minutos

    setDistancia(`${distanciaSimulada} km`);
    setTempo(`${tempoSimulado} minutos`);
  };

  // Salva o histórico e navega para a tela de perfil
  const salvarHistorico = async () => {
    // Aqui você pode salvar no Firestore mais tarde
    navigation.navigate('Perfil', {
      origem,
      destino,
      distancia,
      tempo
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
        placeholder="Origem" 
        style={styles.input} 
        value={origem} 
        onChangeText={setOrigem} 
      />
      <TextInput 
        placeholder="Destino" 
        style={styles.input} 
        value={destino} 
        onChangeText={setDestino} 
      />

      <TouchableOpacity style={styles.calcularButton} onPress={calcularDistancia}>
        <Text style={styles.calcularText}>Calcular</Text>
      </TouchableOpacity>

      {distancia !== '' && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Distância: {distancia}</Text>
          <Text style={styles.resultText}>Tempo estimado: {tempo}</Text>
          <TouchableOpacity style={styles.salvarButton} onPress={salvarHistorico}>
            <Text style={styles.salvarText}>Salvar e ir para Perfil</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.voltarButton} onPress={voltar}>
        <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    backgroundColor: '#f1f1f1',
    paddingBottom: 40,
  },
  title: { 
    fontSize: 28, 
    textAlign: 'center', 
    marginBottom: 30, 
    fontWeight: 'bold', 
    color: '#4e73df' 
  },
  input: { 
    borderWidth: 1, 
    padding: 15, 
    marginBottom: 20, 
    borderRadius: 10, 
    backgroundColor: '#fff', 
    borderColor: '#ddd',
    fontSize: 16,
  },
  calcularButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  calcularText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  result: {
    marginTop: 20, 
    padding: 20, 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 3,
    alignItems: 'center'
  },
  resultText: {
    fontSize: 16, 
    color: '#333', 
    marginBottom: 10,
  },
  salvarButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 15,
  },
  salvarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  voltarButton: {
    marginTop: 30,
    paddingVertical: 12,
    backgroundColor: '#f44336',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  voltarText: {
    color: '#fff',
    fontSize: 18,
  },
});
