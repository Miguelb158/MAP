// src/escreens/profilescreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ route }) {
  const [historico, setHistorico] = useState([]);

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
      <Text style={styles.subtitle}>Histórico de Viagens:</Text>
      {historico.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text>Origem: {item.origem}</Text>
          <Text>Destino: {item.destino}</Text>
          <Text>Distância: {item.distancia}</Text>
          <Text>Tempo: {item.tempo}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 20, marginBottom: 10 },
  item: { backgroundColor: '#eee', padding: 10, borderRadius: 8, marginBottom: 10 }
});
