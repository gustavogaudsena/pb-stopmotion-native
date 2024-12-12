import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity, Linking } from 'react-native';
import { Constants } from 'expo-constants';
import { useAppContext } from '../context/appContext';

const AuthenticationScreen = ({ navigation, usersDB, setUsersDB }) => {
    const [email, setEmail] = useState(usersDB[0].email);
    const [password, setPassword] = useState(usersDB[0].password);
    const [token, setToken] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerScreen, setRegisterScreen] = useState(false);
    const { theme, login, register, } = useAppContext()


    const handleLogin = async () => {

        const { data, error } = await login({ email, password });
        if (error) return Alert.alert('Erro', 'Credenciais inválidas!');
        return navigation.navigate('Home')
       
    };

    const handleRegister = async () => {
        if (!email || email.length < 3) return Alert.alert('Erro de registro', 'Email inválido.');
        if (!password || password.length < 6) return Alert.alert('Erro de registro', 'Senha inválida.');
        if (password !== confirmPassword) return Alert.alert('Erro de registro', 'Senhas não correspondem');
        const credenciais = { email, password }
        const { data, error } = await register(credenciais)
        console.log(data)
        console.log(error)
        if (error) return Alert.alert('Erro', 'Credenciais inválidas!');
        else {
            Alert.alert('Sucesso!', 'Usuário registrado!');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setRegisterScreen(false);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.gray }]}>
            <Image source={require('../assets/login-avatar.png')} style={styles.avatar} />
            <Text style={[styles.title, { color: theme.colors.primary }]}>Stop Motion World</Text>
            <Text style={[styles.authTitle, { color: theme.colors.primary }]}>{registerScreen ? 'Registrar' : 'Login'}</Text>

            <TextInput
                style={[styles.input, { borderColor: theme.colors.darkGray, color: theme.colors.darkGray }]}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
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
                registerScreen &&
                <>
                    <TextInput
                        style={[styles.input, { borderColor: theme.colors.darkGray, color: theme.colors.darkGray }]}
                        placeholder="Corfimar a senha"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        placeholderTextColor={theme.colors.darkGray}
                    />
                    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={handleRegister}>
                        <Text style={[styles.buttonText, { color: theme.colors.gray }]}>Registrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRegisterScreen(false)}>
                        <Text style={[styles.buttonText, { color: theme.colors.primary }]}>Voltar</Text>
                    </TouchableOpacity>
                </>
            }
            {
                !registerScreen &&
                <>
                    <TouchableOpacity style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={handleLogin}>
                        <Text style={[styles.buttonText, { color: theme.colors.gray }]}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setRegisterScreen(true)}>
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
