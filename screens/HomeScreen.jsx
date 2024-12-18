import { useContext, useEffect, useState } from 'react';
import Header from '../components/header';
import { useAppContext } from '../context/appContext';
import { ScrollView, View } from 'react-native';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';
import CameraComponent from '../components/CameraComponent';


export default function HomeScreen() {
    const { movies, setMovies } = useAppContext()

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Header />
               <CameraComponent/>
                <MovieList />
            </View>

            <Footer />
        </View>
    )
}