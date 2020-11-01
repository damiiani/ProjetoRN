import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const MoviesList = ({ data }) => {
    const { title, year, photo } = data;

    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.title}>{title}</Text>

                <Text style={styles.caption}>{year}</Text>
            </View>
            <Image
                style={styles.image}
                source={photo}
            />
        </View>
    );
}

export default MoviesList;
