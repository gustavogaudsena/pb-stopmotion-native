import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { Constants } from 'expo-constants';
import { useAppContext } from '../context/appContext';

const AuthenticationScreen = ({ navigation, usersDB, setUsersDB }) => {
    const [username, setUsername] = useState(usersDB[0].username);
    const [password, setPassword] = useState(usersDB[0].password);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [register, setRegister] = useState(false);
    const { theme } = useAppContext()

    const handleLogin = () => {
        return navigation.navigate('Home')
        if (Array.from(usersDB).some((user) => user.username.toUpperCase() === username.toUpperCase() && user.password === password)) navigation.navigate('ListaTransacoes');
        else Alert.alert('Erro de autenticação', 'Nome de usuário ou senha inválidos.');
    };

    const handleRegister = () => {
        if (!username || username.length < 3) return Alert.alert('Erro de registro', 'Nome de usuário inválido.');
        if (!password || password.length < 6) return Alert.alert('Erro de registro', 'Senha inválida.');
        if (password !== confirmPassword) return Alert.alert('Erro de registro', 'Senhas não correspondem');
        if (Array.from(usersDB).some((user) => user.username === username)) return Alert.alert('Erro de registro', 'Nome de usuário já cadastrado.');
        const newUser = { username, password }
        const newDB = [...usersDB, newUser]
        setUsersDB(newDB)
        Alert.alert('Sucesso!', 'Usuário registrado!');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setRegister(false);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.gray }]}>
            <Image source={require('../assets/login-avatar.png')} style={styles.avatar} />
            <Text style={[styles.title, { color: theme.colors.primary }]}>Stop Motion World</Text>
            <Text style={[styles.authTitle, { color: theme.colors.primary }]}>{register ? 'Registrar' : 'Login'}</Text>
            <TextInput
                style={[styles.input, { borderColor: theme.colors.darkGray, color: theme.colors.darkGray }]}
                placeholder="Nome de usuário"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor={theme.colors.darkGray}
            />
            <TextInput
                style={[styles.input, { borderColor: theme.colors.darkGray, color: theme.colors.darkGray }]}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor={theme.colors.darkGray}
            />
            {
                register &&
                <>
                    <TextInput
                        style={[styles.input, { borderColor: theme.colors.darkGray, color: theme.colors.darkGray }]}
                        placeholder="Corfimar a senha"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        placeholderTextColor={theme.colors.darkGray}
                    />
                    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]}  onPress={handleRegister}>
                        <Text style={[styles.buttonText, { color: theme.colors.gray }]}>Registrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRegister(false)}>
                        <Text style={[styles.buttonText, { color: theme.colors.primary }]}>Voltar</Text>
                    </TouchableOpacity>
                </>
            }
            {
                !register &&
                <>
                    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={handleLogin}>
                        <Text style={[styles.buttonText, { color: theme.colors.gray }]}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRegister(true)}>
                        <Text style={[styles.buttonText, { color: theme.colors.primary }]}>Registrar</Text>
                    </TouchableOpacity>
                </>
            }
        </View >
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: 200,
        height: 200,
    },
    container: {
        backgroundColor: '#0c1117ff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        letterSpacing: 2,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    authTitle: {
        fontSize: 15,
        letterSpacing: 1,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 0.25,
        borderRadius: 5,
        marginBottom: 15
    },
    button: {
        backgroundColor: '#014f15',
        paddingVertical: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    colorGreen: {
        color: "#014f15"
    },
});

export default AuthenticationScreen;
