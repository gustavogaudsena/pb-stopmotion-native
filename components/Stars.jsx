import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Stars({ stars, max = 5 }) {
  function handleStars(value) {
    return Math.round((value * 10) / 2) / 10;
  }

  const currentStars = handleStars(stars);

  return (
    <View style={styles.starsContainer}>
      {Array.from({ length: max }, (_, idx) => {
        const index = idx + 1;
        return (
          <Ionicons
            key={idx}
            name={
              currentStars >= index
                ? 'star'
                : currentStars < index && currentStars - (index - 1) > 0
                ? 'star-half'
                : 'star-outline'
            }
            size={20}
            color="#FFD700" // Dourado para estrelas
            style={styles.starIcon}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginHorizontal: 2,
  },
});
