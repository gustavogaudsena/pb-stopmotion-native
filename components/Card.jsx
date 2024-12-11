import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Stars from './Stars';

export default function Card({ movie }) {
  const navigation = useNavigation();

  const movieDate = new Date(movie.release_date).toLocaleDateString('pt-BR');

  function handleNavigate() {
    navigation.navigate('Detalhes', { id: movie.id });
  }

  return (
    <TouchableOpacity style={styles.card} onPress={handleNavigate}>
      <Image style={styles.cardImage} source={{ uri: movie.imagens.principal.src }} />
      <View style={styles.cardContainer}>
        <Text style={styles.cardNome}>{movie.title}</Text>
        <Text style={styles.cardNomeOriginal}>{movie.originalTitle}</Text>
        <View style={styles.cardRow}>
          <Stars stars={movie.stars} />
          <Text style={styles.cardDate}>{movieDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContainer: {
    padding: 16,
  },
  cardNome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardNomeOriginal: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
  },
});
