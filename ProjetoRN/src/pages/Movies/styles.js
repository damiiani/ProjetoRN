import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: '80%',
        height: '85%',
        padding: 25,
        backgroundColor: '#403594',
        borderRadius: 6,
    },
    header: {
        backgroundColor: '#7568E0',
        padding: 2,
        borderRadius: 6,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#403594',
        fontWeight: 'bold',
    },
});

export default styles;
