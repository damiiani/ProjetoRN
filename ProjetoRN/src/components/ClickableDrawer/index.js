import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function ClickableDrawer(props) {
    const { color } = props;
    
    const navigation = useNavigation();
    const isDrawerOpen = useIsDrawerOpen();
    
    function showDrawer() {
        if (!isDrawerOpen) {
            navigation.openDrawer();
        }
    }

    return (
        <TouchableOpacity onPress={showDrawer}>
            <AntDesign name="menu-fold" size={18} color={color} />
        </TouchableOpacity>
    );
}