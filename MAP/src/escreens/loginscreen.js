import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';


const RealizarLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');


    return (
        <ImageBackground 
            source={require('../../assets/map.png')} 
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
                        autoCapitalize="none"
                        placeholderTextColor="#999"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        onChangeText={setSenha}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor="#999"
                    />

                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                {/* Modal personalizado */}
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="fade"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalText}>{modalMessage}</Text>
                        </View>
                    </View>
                </Modal>
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
    // Estilos do modal
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: 250,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        color: '#333',
        fontWeight: '500',
    },
});

export default RealizarLogin;
