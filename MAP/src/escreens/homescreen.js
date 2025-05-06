import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
// import axios from 'axios';
// import { auth, db } from '../firebase';
// import { addDoc, collection } from 'firebase/firestore';

export default function HomeScreen({ navigation }) {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularRota = async () => {
    const apiKey = 'SUA_API_KEY_GOOGLE_MAPS';
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origem}&destinations=${destino}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const data = response.data.rows[0].elements[0];
      const distancia = data.distance.text;
      const duracao = data.duration.text;
      setResultado({ distancia, duracao });

      await addDoc(collection(db, 'destinos'), {
        uid: auth.currentUser.uid,
        origem,
        destino,
        distancia,
        duracao,
        timestamp: new Date()
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Origem" onChangeText={setOrigem} />
      <TextInput placeholder="Destino" onChangeText={setDestino} />
      <Button title="Calcular" onPress={calcularRota} />
      {resultado && (
        <Text>Distância: {resultado.distancia} | Tempo: {resultado.duracao}</Text>
      )}
      <Button title="Perfil" onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}
