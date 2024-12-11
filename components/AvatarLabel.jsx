import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { IMAGES_BASE_URL } from '../utils/constants';
import { useAppContext } from '../context/appContext';

export default function AvatarLabel({ name, logo }) {
    const { theme } = useAppContext()

    return (
        <View style={[styles.avatarLabel, { borderColor: theme.colors.primary }]}>
            <Image
                source={{ uri: `${IMAGES_BASE_URL}/original/${logo}` }}
                style={styles.avatarImage}
            />
            <Text style={styles.avatarText}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    avatarLabel: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 8,
        marginVertical: 4,
    },
    avatarImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
    },
    avatarText: {
        fontSize: 16,
        marginLeft: 8,
    },
});
