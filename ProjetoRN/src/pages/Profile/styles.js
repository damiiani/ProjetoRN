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
        width: 320,
        height: 400,
        padding: 25,
        backgroundColor: '#3FE0C2',
        borderRadius: 6,
    },
    header: {
        backgroundColor: '#ACE0C2',
        padding: 2,
        borderRadius: 6,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#3FE0C2',
        fontWeight: 'bold',
    },
    photo: {
        width: '200',
        height: '200',
        borderRadius: '45',
    }
});

export default styles;
