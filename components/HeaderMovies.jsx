import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function HeaderMovies() {
    return (
        <View style={styles.headerMovies}>
            <View style={styles.headerMoviesTitle}>
                <FontAwesome5 name="globe-americas" size={40} color="black" />
                <Text style={styles.title}>Stop Motion World</Text>
            </View>
            <TouchableOpacity onPress={() => { /* navegação para voltar */ }}>
                <Text style={styles.headerMoviesLink}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerMovies: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerMoviesTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginLeft: 8,
        fontWeight: 'bold',
    },
    headerMoviesLink: {
        fontSize: 16,
        color: 'blue',
    },
});
