import { useNavigation } from "@react-navigation/native"
import { useAppContext } from "../context/appContext"
import { useEffect } from "react"

export default function HandleAccess() {
    const { theme, getSession } = useAppContext()
    const navigation = useNavigation()

    useEffect(() => {
        getSession().then((response) => {
            if (response.session) return navigation.navigate('Home');
            return navigation.navigate('Authentication')
        })
    }, [])

    return <></>
}