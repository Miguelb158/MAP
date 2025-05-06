import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { auth, db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function ProfileScreen() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const carregarHistorico = async () => {
      const q = query(collection(db, 'destinos'), where('uid', '==', auth.currentUser.uid));
      const snapshot = await getDocs(q);
      const dados = snapshot.docs.map(doc => doc.data());
      setHistorico(dados);
    };
    carregarHistorico();
  }, []);

  return (
    <View>
      <Text>Usuário: {auth.currentUser.email}</Text>
      <Text>Histórico de Viagens:</Text>
      {historico.map((item, index) => (
        <Text key={index}>{item.origem} → {item.destino} | {item.distancia} | {item.duracao}</Text>
      ))}
    </View>
  );
}
