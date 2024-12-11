
import * as React from 'react';
import { Text, View, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

const LogadoContext = React.createContext();
const AutenticacaoContext = React.createContext();
function useEstaLogado() {
    const estaLogado = React.useContext(LogadoContext);
    return estaLogado;
}
function useEstaDesLogado() {
    const estaLogado = React.useContext(LogadoContext);
    return !estaLogado;
}
function TelaCarga() {
    return (
        <View>
            <Text>Carregando ...</Text>
        </View>
    );
}
function TelaPrincipal() {
    const { sair } = React.useContext(AutenticacaoContext);
    return (
        <View>
            <Text>Logado no sistema</Text>
            <Button onPress={sair}> Sair </Button>
        </View>
    );
}
function TelaLogin() {
    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const { logar } = React.useContext(AutenticacaoContext);
    return (
        <View>
            <TextInput
                placeholder="Usuário"
                value={usuario}
                onChangeText={setUsuario}
            />
            <TextInput
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            <Button onPress={() => logar({ usuario, senha })}>Entrar</Button>
        </View>
    );
}
const NavStackPrincipal = createNativeStackNavigator({
    screens: {
        Principal: {
            if: useEstaLogado,
            screen: TelaPrincipal,
        },
        Login: {
            if: useEstaDesLogado,
            screen: TelaLogin,
        },
    },
});

const Navigation = createStaticNavigation(NavStackPrincipal);
export default function App() {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.tipo) {
                case 'RECUPERAR_TOKEN':
                    return {
                        ...prevState,
                        tokenUsuario: action.tokenUsuario,
                        estaCarregando: false,
                    };
                case 'LOGADO':
                    return {
                        ...prevState,
                        estaDeslogado: false,
                        tokenUsuario: action.tokenUsuario,
                    };
                case 'DESLOGADO':
                    return {
                        ...prevState,
                        estaDeslogado: true,
                        tokenUsuario: null,
                    };
            }
        },
        {
            estaCarregando: true,
            estaDeslogado: false,
            tokenUsuario: null,
        }
    );
    React.useEffect(() => {
        const asyncCheck = async () => {
            let tokenUsuario;
            try {
                tokenUsuario = await SecureStore.getItemAsync('tokenUsuario');
            } catch (e) {
                //tratar erro de recuperacao do token
            }
            //depois de retornar o token
            dispatch({ tipo: 'RECUPERAR_TOKEN', tokenUsuario: tokenUsuario });
        };
        asyncCheck();
    }, []);
    
    const autenticacaoContext = React.useMemo(
        () => ({
            logar: async (data) => {
                //consulta ao backend de usario e senha e retorno do token
                console.log(data)
                dispatch({ tipo: 'LOGADO', tokenUsuario: 'meu-token' });
            },
            sair: () => {
                dispatch({ tipo: 'DESLOGADO' });
            },
            cadastrar: async (data) => {
                dispatch({ tipo: 'LOGADO', tokenUsuario: 'meu token' });
            },
        }),
        []
    );
    if (state.estaCarregando) {
        return <TelaCarga />;
    }
    const estaLogado = state.tokenUsuario != null;
    console.log('token usuario', state.tokenUsuario);
    return (
        <AutenticacaoContext.Provider value={autenticacaoContext}>
            <LogadoContext.Provider value={estaLogado}>
                <Navigation />
            </LogadoContext.Provider>
        </AutenticacaoContext.Provider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});