import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

import LinearGradient from 'react-native-linear-gradient';
import ImageColors from 'react-native-image-colors'
import styles from './styles';

const image = require('../../assets/images/umbrella-nightcore.jpg')



const ImageBlur = () => {

    const [colors, setColors] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        ImageColors.getColors(image, {
            fallback: '#000000',
            quality: 'low',
        }).then(colors => {
            // console.log(colors)
            setColors(colors)
            setLoaded(true)
        });
    }, []);


    // console.log(colors)

    return (
        <>
            {loaded && <View
                style={styles.gradient}
            >
                <LinearGradient
                    colors={[colors.vibrant, 'transparent', 'transparent', colors.average]}
                    locations={[0.2, 0.27, 0.6, 0.68]}
                    style={styles.gradientImg}
                />
                <Image source={image} style={styles.image} />
            </View>}
        </>
    )
}

export default ImageBlur