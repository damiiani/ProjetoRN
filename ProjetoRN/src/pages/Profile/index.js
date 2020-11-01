import React from 'react';
import { View, Text, FlatList } from 'react-native';

import ClickableDrawer from '../../components/ClickableDrawer';
import ProfileList from '../../components/ProfileList';

import profile from '../../db/profile';

import styles from './styles';

export default function Profile() {
    return (
        <View style={styles.mainContainer}>
            <ClickableDrawer color="#3FE0C2" />

            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Perfis</Text>
                    </View>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        data={profile}
                        renderItem={({ item }) => <ProfileList data={item} />}
                    />
                </View>
            </View>
        </View>
    );
}
