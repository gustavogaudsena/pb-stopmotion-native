import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MovieListController from './MovieListController';
import { useAppContext } from '../context/appContext';
import Card from './Card';

export default function MovieList() {
    const { movies, query, fetchMovies } = useAppContext();
    useEffect(() => {
        fetchMovies()
    }, [])
    return (

        <View style={styles.container}>
            <MovieListController />
            {movies.length ? (
                <FlatList
                    data={movies}
                    renderItem={({ item }) => <Card movie={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={styles.notFound}>
                    {query
                        ? 'Não foi encontrado nenhum filme com o nome buscado'
                        : 'Não foi encontrado nenhum filme'}
                </Text>
            )}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    notFound: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#999',
    },
});
