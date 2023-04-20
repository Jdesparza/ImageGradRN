import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

import FastImage from 'react-native-fast-image';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import ImageColors from 'react-native-image-colors'
import styles from './styles';

const image = require('../../assets/images/umbrella-nightcore.jpg')



const ImgBlur = () => {

    const [colors, setColors] = useState({})
    const [loaded, setLoaded] = useState(false)

    const gradient = {
        colors: ['red', 'white'],
    };

    useEffect(() => {
        ImageColors.getColors(image, {
            fallback: '#000000',
            quality: 'low',
        }).then(colors => {
            console.log(colors)
            setColors(colors)
            setLoaded(true)
        });
    }, []);


    // console.log(colors)

    return (
        <>
            {loaded && <LinearGradient
                colors={[colors.vibrant, colors.average]}
                style={styles.gradient}
            >
                <LinearGradient
                    colors={[colors.vibrant, 'transparent', 'transparent', colors.average]}
                    locations={[0.26, 0.35, 0.6, 0.74]}
                    style={styles.gradientImg}
                />
                <Image source={image} style={styles.image} />
            </LinearGradient>}
        </>
    )
}

export default ImgBlur