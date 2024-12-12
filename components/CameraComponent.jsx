import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useAppContext } from '../context/appContext';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';

const CameraComponent = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const { theme } = useAppContext()
    const [permission, requestPermission] = useCameraPermissions();
    const [facing, setFacing] = useState('back');
    const [show, setShow] = useState(false)

    function handleCamera() {
        requestPermission().then((resp) => {
            setShow(true)
        })
    }
    if (!permission || !show || !permission.granted) {
        return (
            <View style={{ marginTop: 22, }}>
                <TouchableOpacity onPress={handleCamera} style={[{ backgroundColor: theme.colors.primary, padding: 4 }]}>
                    <FontAwesome5 style={[styles.buttonText, { color: theme.colors.gray, textAlign: 'center' }]} name='camera' color={theme.colors.gray} />
                </TouchableOpacity>
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[{ justifyContent: 'center', alignItems: 'center', flex: 1 }]} onPress={toggleCameraFacing}>
                        <FontAwesome6 style={[ { color: theme.colors.gray, textAlign: 'center'}]} name='camera-rotate' color={theme.colors.gray} size={30}/>
                    </TouchableOpacity>
                </View>
            </CameraView>
            <View>
                <TouchableOpacity style={[{ backgroundColor: theme.colors.primary, padding: 4 }]} onPress={() => setShow(false)}>
                    <Feather style={[styles.buttonText, { color: theme.colors.gray, textAlign: 'center' }]} name='camera-off' color={theme.colors.gray} />
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        flex: 1,
        justifyContent: 'center'
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        backgroundColor: '#014f15',
        paddingVertical: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CameraComponent;
