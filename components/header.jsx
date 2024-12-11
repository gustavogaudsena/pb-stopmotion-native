import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useAppContext } from '../context/appContext';
import SearchBar from './searchBar';


export default function Header() {
    const { theme } = useAppContext();

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
});
