import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    caption: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 14,
    },
    image: {
        width: 100,
        height: 120,
        borderRadius: '50%',
    }
});

export default styles;
