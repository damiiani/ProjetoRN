import React from 'react';
import { View, Text } from 'react-native';

import ClickableDrawer from '../../components/ClickableDrawer';

import styles from './styles';

export default function Home() {
    return (
        <View style={styles.mainContainer}>
            <ClickableDrawer color="#C656E0" />

            <View style={styles.container}>
                
                <View style={styles.box}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Bem-vindo</Text>
                    </View>

                    <View style={styles.main}>
                        <Text style={styles.mainText}>Seja bem-vindo ao GDApp, comece arrastando para o lado</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
