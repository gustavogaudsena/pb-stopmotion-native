import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import MovieFrame from '../components/MovieFrame';
import { useAppContext } from '../context/appContext';
import Badge from '../components/Badge';
import AvatarLabel from '../components/AvatarLabel';

export default function DetalhesScreen({ navigation, route }) {
    const params = route.params
    const id = params?.id
    const { theme, getMovieById } = useAppContext();
    const [movie, setMovie] = useState(null);

    async function loadMovie() {
        const data = await getMovieById(id)
        setMovie(data.movie);

    }
    useEffect(() => {
        loadMovie()
    }, []);

    return (
        <ScrollView >
            <View style={[styles.container, { backgroundColor: theme.colors.bgColor }]}>
                {movie && (
                    <View style={styles.movieContainer}>
                        <View style={styles.movieDetails}>
                            <Text style={styles.movieTitle}>{movie.title}</Text>
                            <Text style={styles.movieOriginalTitle}>{movie?.originalTitle}</Text>
                            <Text style={styles.movieOverview}>{movie.overview || 'Sem informações de sinopse.'}</Text>
                            <Text style={styles.movieDate}>Data lançamento: {new Date(movie?.release_date).toLocaleDateString('pt-BR')}</Text>
                            {movie.videos.results && movie.videos.results.length > 0 && (
                                <MovieFrame movieKey={movie.videos.results[0]?.key} />
                            )}
                            {
                                movie.genres.length &&
                                <View style={styles.genresContainer}>
                                    <Text style={styles.sectionTitle}>Gêneros:</Text>
                                    <View style={styles.badgesContainer}>
                                        {movie.genres.map(genre => (
                                            <Badge key={genre.id} name={genre.name} />
                                        ))}
                                    </View>
                                </View>
                            }
                            {
                                movie.production_companies.length &&
                                <View style={styles.companiesContainer}>
                                    <Text style={styles.sectionTitle}>Produtoras:</Text>
                                    <View style={styles.companiesList}>
                                        {movie.production_companies.map(company => (
                                            <AvatarLabel
                                                key={company.id}
                                                name={company.name}
                                                logo={company.logo_path}
                                            />
                                        ))}
                                    </View>
                                </View>
                            }
                        </View>
                    </View>
                )}
                {!movie && (
                    <View style={styles.notFound}>
                        <Text>Não foi encontrado nenhum filme para esse id.</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    movieContainer: {
        marginBottom: 20,
    },
    movieDetails: {
        marginTop: 16,
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    movieOriginalTitle: {
        fontSize: 20,
        fontStyle: 'italic',
        marginBottom: 8,
    },
    movieOverview: {
        fontSize: 16,
        marginBottom: 8,
    },
    movieDate: {
        fontSize: 16,
        marginBottom: 16,
    },
    notFound: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    },
    genresContainer: {
        marginBottom: 16,
    },
    companiesContainer: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    badgesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    companiesList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
});
