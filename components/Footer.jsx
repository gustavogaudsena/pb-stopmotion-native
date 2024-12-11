import { StyleSheet, View, Text } from "react-native"
import { useAppContext } from "../context/appContext"

export default function Footer() {

    const { theme } = useAppContext()
    return (
        <View style={[styles.footer, { backgroundColor: theme.colors.primary }]}>
            <Text style={[styles.footerText, { color: theme.colors.white }]}>
                &#169; Projeto de Bloco: Desenvolvimento Front-end com Frameworks
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        padding: 10,
        bottom: '0',
        backgroundColor: '#b12f1f9e'
    },
    footerText: {
        textAlign: 'center'
    }
})