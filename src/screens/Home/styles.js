import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // height,
        backgroundColor: 'rgba(0,0,0, .2)',
        paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight : 0), //+10
    }
});

export default styles;