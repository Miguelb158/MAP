import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => navigation.replace('Home'))
      .catch(() => {
        createUserWithEmailAndPassword(auth, email, senha)
          .then(() => navigation.replace('Home'));
      });
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} />
      <Button title="Entrar" onPress={login} />
    </View>
  );
}
