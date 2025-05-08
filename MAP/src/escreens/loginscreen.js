import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig';

const RealizarLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const tentarLogar = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, senha)
            .then(() => {
                navigation.navigate('Home');
                alert('Login realizado com sucesso!');
            })
            .catch((error) => {
                alert('Email ou senha incorretos!');
                console.error('Login failed:', error);
            });
    };

    return (
        <ImageBackground 
            source={require('../../assets/loc.jpg')} 
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.titulo}>Login</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        placeholderTextColor="#999"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        onChangeText={setSenha}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        placeholderTextColor="#999"
                    />

                    <TouchableOpacity onPress={tentarLogar} style={styles.botao}>
                        <Text style={styles.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    innerContainer: {
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        backgroundColor: '#ffffffcc',
        borderRadius: 20,
        padding: 30,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 10,
        elevation: 8,
    },
    titulo: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#00796B',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        marginVertical: 10,
        fontSize: 16,
        borderColor: '#b2dfdb',
        borderWidth: 1,
    },
    botao: {
        width: '100%',
        backgroundColor: '#00796B',
        borderRadius: 25,
        paddingVertical: 14,
        marginTop: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 5,
    },
    textoBotao: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default RealizarLogin;
