import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppContext } from '../context/appContext';

export default function Badge({ name }) {
    const { theme } = useAppContext()
    return (
        <View style={[styles.badge, { backgroundColor: theme.colors.primaryOp, borderColor: theme.colors.primary }]}>
            <Text style={[styles.badgeText, {color: theme.colors.primary}]}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        marginVertical: 4,
    },
    badgeText: {
        fontSize: 14,
        textAlign: 'center',
    },
});
