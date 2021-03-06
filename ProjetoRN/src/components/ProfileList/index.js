import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const ProfileList = ({ data }) => {
    const { name, photo } = data;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Image
                style={styles.image}
                source={photo}
            />
        </View>
    );
}

export default ProfileList;
