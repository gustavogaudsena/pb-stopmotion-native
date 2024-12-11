import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useAppContext } from '../context/appContext';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ControllerItem({ handler, value, title, icon, orderBy, sortBy, disabled }) {
  const { theme } = useAppContext();
  const selectedColor = theme === 'dark' ? '#5D3E9F' : '#B12F1F'; // Substitui as variáveis de tema

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={handler}
      value={value}
      disabled={disabled}
    >
      {icon}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.arrows}>
        {sortBy === value && orderBy === 'desc' && (
          <AntDesign name='arrowdown' color={selectedColor} />
        )}
        {sortBy === value && orderBy === 'asc' && (
           <AntDesign name='arrowup' color={selectedColor} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  disabledButton: {
    opacity: 0.5,
  },
  title: {
    marginLeft: 8,
  },
  arrows: {
    marginLeft: 8,
    flexDirection: 'row',
  },
});
