import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import FastImage from 'react-native-fast-image';
import { BlurView } from '@react-native-community/blur';

const imageUri = require('../../assets/images/umbrella-nightcore.jpg')

const ImgBlurA = () => {
    return (
        <View style={styles.container}>
            <BlurView style={styles.blurContainer} blurType="light" blurAmount={10} />
            <FastImage style={styles.image} source={imageUri} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blurContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    image: {
        width: '80%',
        aspectRatio: 1,
        borderRadius: 10,
        // overflow: 'hidden',
        borderWidth: 15,
        borderColor: 'rgba(255,255,255, 0)',
    },
});

export default ImgBlurA