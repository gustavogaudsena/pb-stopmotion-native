import React from 'react';
import { WebView } from 'react-native-webview';

export default function MovieFrame({ movieKey }) {
    return (
        <WebView
            originWhitelist={['*']}
            source={{ uri: `https://www.youtube.com/embed/${movieKey}?si=p-j0Syge-OX4fp_A` }}
            style={{ width: '100%', height: 200 }}
        />
    );
}
