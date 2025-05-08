// src/escreens/loginscreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig'; // ajuste o caminho se necessário


const RealizarLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const tentarLogar = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, senha)
        .then(() => {
            navigation.navigate('homescreen');
            alert('Login realizado com sucesso!');
        })
        .catch((error) => {
                alert('ta indo')
                console.error('Login failed:', error);
            });

    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>

            <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} keyboardType="email-address"autoCapitalize='none'
            />

            <TextInput style={styles.input} placeholder="Senha" onChangeText={setSenha} secureTextEntry={true} autoCapitalize='none'/>

            <TouchableOpacity onPress={tentarLogar}>
                <Text style={styles.texto}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    logo: {
        height: 120,
        width: 120,
        marginBottom: 30,
        borderRadius: 60,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginVertical: 10,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    texto: {
        width: '100%',
        backgroundColor: '#4CAF50',
        borderRadius: 25,
        paddingVertical: 12,
        marginTop: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 4,
        elevation: 4,
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default RealizarLogin;