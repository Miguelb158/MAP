// src/escreens/loginscreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.replace('Home');
    } catch (err) {
      Alert.alert("Erro ao logar", err.message);
    }
  };

  const cadastrar = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigation.replace('Home');
    } catch (err) {
      Alert.alert("Erro ao cadastrar", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry value={senha} onChangeText={setSenha} />
      <Button title="Entrar" onPress={login} />
      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
});
