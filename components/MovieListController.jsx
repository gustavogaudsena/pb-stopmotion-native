import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import ControllerItem from './ControllerItem';
import { Icon } from 'react-native-vector-icons/FontAwesome6';
import { useAppContext } from '../context/appContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SORT_TYPES_MAP } from '../utils/constants';

export default function MovieListController() {
    const { currentPage, totalPages, setCurrentPage, setTotalPages, nextPage, previousPage, sortMovies, orderBy, sortBy } = useAppContext();


    useEffect(() => {
        // Simula carregamento do loader
        const loader = { page: 1, total_pages: 10 };
        setCurrentPage(loader.page);
        setTotalPages(loader.total_pages);
    }, []);

    const handleOrdenacao = (value) => {
        sortMovies({ sortBy: value });
    };
  
    return (
        <View style={styles.container}>
            <View style={styles.ordenacaoContainer}>
                <ControllerItem
                    handler={() => handleOrdenacao(SORT_TYPES_MAP.popularity.value)}
                    icon={<Ionicons name='flame' />}
                    value={SORT_TYPES_MAP.popularity.value}
                    title={SORT_TYPES_MAP.popularity.label}
                    orderBy={orderBy}
                    sortBy={sortBy}
                />
                <ControllerItem
                    handler={() => handleOrdenacao(SORT_TYPES_MAP.primary_release_date.value)}
                    icon={<Ionicons name='calendar-outline'/>}
                    value={SORT_TYPES_MAP.primary_release_date.value}
                    title={SORT_TYPES_MAP.primary_release_date.label}
                    orderBy={orderBy}
                    sortBy={sortBy}
                />
                <ControllerItem
                    handler={() => handleOrdenacao(SORT_TYPES_MAP.vote_average.value)}
                    icon={<Ionicons name='star' />}
                    value={SORT_TYPES_MAP.vote_average.value}
                    title={SORT_TYPES_MAP.vote_average.label}
                    orderBy={orderBy}
                    sortBy={sortBy}
                />
            </View>
            <View style={styles.pagination}>
                <TouchableOpacity onPress={previousPage}>
                    <View>
                        <Ionicons name='caret-back-circle' size={25} />
                    </View>
                </TouchableOpacity>
                <Text>{`${currentPage} / ${totalPages}`}</Text>
                <TouchableOpacity onPress={nextPage} >
                    <View>
                        <Ionicons name='caret-forward-circle' size={25} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    ordenacaoContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
