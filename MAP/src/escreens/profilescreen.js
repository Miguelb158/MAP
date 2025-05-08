import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen({ route }) {
  const [historico, setHistorico] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      const novaEntrada = {
        origem: route.params.origem,
        destino: route.params.destino,
        distancia: route.params.distancia,
        tempo: route.params.tempo,
      };
      setHistorico((prev) => [...prev, novaEntrada]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>
      
      {/* Exibindo usuário e senha fixos */}
      <View style={styles.fixedInfo}>
        <Text style={styles.fixedText}>Usuário: sesi@Gmail.com</Text>
        <Text style={styles.fixedText}>Senha: 707070</Text>
      </View>

      <Text style={styles.subtitle}>Histórico de Viagens:</Text>

      {historico.length > 0 ? (
        historico.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.textoItem}>Origem: {item.origem}</Text>
            <Text style={styles.textoItem}>Destino: {item.destino}</Text>
            <Text style={styles.textoItem}>Distância: {item.distancia}</Text>
            <Text style={styles.textoItem}>Tempo: {item.tempo}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.emptyMessage}>Nenhum histórico encontrado.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 26, marginBottom: 10, textAlign: 'center', fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 20, marginBottom: 10, color: '#555' },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  textoItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  emptyMessage: {
    fontSize: 18,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  fixedInfo: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 10,
  },
  fixedText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

