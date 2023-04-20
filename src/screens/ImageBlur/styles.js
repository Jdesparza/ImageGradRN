import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    gradient: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageCont: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradientImg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100
    },
    image: {
        width,
        height: width - 50,
        marginBottom: width / 4,
    },
});

export default styles;