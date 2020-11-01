import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 30,
    },
    textBox: {
        width: '60%',
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
        height: 150,
        borderRadius: 5,
    }
});

export default styles;
