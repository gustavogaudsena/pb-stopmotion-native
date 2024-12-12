import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useAppContext } from '../context/appContext';
import SearchBar from './searchBar';
import { useNavigation } from '@react-navigation/native';
import CameraComponent from './CameraComponent';


export default function Header() {
    const { theme, logout } = useAppContext();
    const navigation = useNavigation()

    async function handleLogout() {
       const response = await logout()
       if (response.success) navigation.navigate('Authentication')
    }

    return (
        <View style={styles.header}>
            <ImageBackground
                source={require('../assets/header-bg.png')}
                resizeMode="cover"
                style={styles.headerContainer}
            >
                <View style={[styles.headerBox, { backgroundColor: theme.colors.primaryOp }]}>
                    <View style={[styles.headerTitle, { color: theme.colors.white }]}>
                        <Text style={[styles.titleText, { color: theme.colors.white }]}>
                            Stop Motion World
                        </Text>
                    </View>
                    <SearchBar />
                </View>
            </ImageBackground>
            
            <TouchableOpacity onPress={handleLogout} style={[ { backgroundColor: theme.colors.darkGrayOp, }]}>
                <Text style={[styles.buttonText, { color: theme.colors.primary, textAlign: 'center'  }]}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        minHeight: 300,
        height: 300
    },
    headerContainer: {
        width: '100%',
        minHeight: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerBox: {
        marginHorizontal: 'auto',
        padding: 20,
        borderRadius: 16,
        width: '95%',
        maxWidth: 450,
        minWidth: 200,
        gap: 12,
        display: 'flex',
        flexDirection: 'column',
        height: 150
    },
    headerTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        flexDirection: 'column',
        textAlign: 'center',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
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
    },
});
