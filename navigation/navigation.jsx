import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import { useEffect, useState } from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import { useAppContext } from '../context/appContext';
import { SafeAreaView, StyleSheet } from 'react-native';
import HandleAccess from '../components/HandleAccess';

export const MOCK_USER = [
    {
        email: 'fake_email@gmail.com',
        password: 'mystrongpassword'
    }
]

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const [usersDB, setUsersDB] = useState(MOCK_USER)
    
    return (
        <SafeAreaView style={[styles.container]}>
            <NavigationContainer>
                <HandleAccess />
                <Stack.Navigator initialRouteName="Authentication" screenOptions={{ headerShown: false }} >
                    <Stack.Screen name="Authentication" options={({ navigation }) => ({
                        headerShown: false,
                        title: 'Autenticação'
                    })}>
                        {(props) => <AuthenticationScreen usersDB={usersDB} setUsersDB={setUsersDB} {...props} />}
                    </Stack.Screen>
                    <Stack.Screen component={HomeScreen} name="Home" options={({ navigation }) => ({
                        headerShown: false,
                        title: 'Stopmotion'
                    })} />
                    <Stack.Screen component={DetalhesScreen} name="Detalhes" options={({ navigation }) => ({
                        headerShown: true,
                        title: 'Stopmotion'
                    })} />
                </Stack.Navigator>
            </NavigationContainer >
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
