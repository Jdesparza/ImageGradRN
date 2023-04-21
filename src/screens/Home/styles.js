import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // height,
        backgroundColor: 'rgba(255,255,255, .7)',
        paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0), //+10
        alignItems: 'center'
    },
    btnContainer: {
        height: 130,
        width: '90%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,.5)',
        margin: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,

    },
    btnContainerPart: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnText: {
        backgroundColor: '#FD4C8A',
        width: 45,
        height: 45,
        textAlign: 'center',
        paddingVertical: 10,
        borderRadius: 30
    }
});

export default styles;