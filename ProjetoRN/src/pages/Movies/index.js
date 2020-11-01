import React from 'react';
import { Text, View, FlatList } from 'react-native';

import ClickableDrawer from '../../components/ClickableDrawer';
import MoviesList from '../../components/MoviesList';

import movies from '../../db/movies';

import styles from './styles';

export default function Movies() {
    return (
        <View style={styles.mainContainer}>
            <ClickableDrawer color="#403594" />

            <View style={styles.container}>    
                <View style={styles.box}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Filmes</Text>
                    </View>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        data={movies}
                        renderItem={({ item }) => <MoviesList data={item} />}
                    />
                </View>
            </View>
        </View>
    )
}
