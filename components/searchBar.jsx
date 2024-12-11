import React from 'react';
import { View, TextInput, Button, StyleSheet, TouchableHighlight, Text, TouchableOpacity } from 'react-native';
import { useAppContext } from '../context/appContext';

export default function SearchBar() {
  const { query, setQuery, theme, searchMovie } = useAppContext();

  const handleSearch = (text) => {
    setQuery(text);
    searchMovie(text);
}

const clearSearch = (e) => {
    setQuery('')
    searchMovie('')
}

  return (
    <View style={styles.searchBarForm}>
      <TextInput
        style={[styles.searchBarInput, { color: theme.colors.black }]}
        value={query}
        onChangeText={handleSearch}
        placeholder="Animação"
        placeholderTextColor={theme.colors.black}
      />
      <TouchableOpacity onPress={clearSearch} style={[styles.buttonStyle, { backgroundColor: theme.colors.primary }]}>
        <View >
          <Text style={[{ color: theme.colors.white }, styles.buttonText]}>Limpar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarForm: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    flex: 1
  },
  searchBarInput: {
    width: '100%',
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: 'white',
    textAlign: 'center',
    placeholderTextColor: 'red'
  },
  buttonStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center'
  }
});
