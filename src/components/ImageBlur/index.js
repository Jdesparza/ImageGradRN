import { View, Text, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

import LinearGradient from 'react-native-linear-gradient';
import ImageColors from 'react-native-image-colors'
import styles from './styles';

// const image = require('../../assets/images/umbrella-nightcore.jpg')



const ImageBlur = ({ image }) => {

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
    }, [image]);


    // console.log(colors)

    return (
        <>
            {loaded && <View
                style={styles.gradient}
            >
                <LinearGradient
                    colors={[
                        colors.average != '#000000' ? colors.average : '#353540', // colors.vibrant != '#000000' ? colors.vibrant : colors.average,
                        'transparent',
                        'transparent',
                        colors.average != '#000000' ? colors.average : '#353540',
                    ]}
                    locations={[0.21, 0.27, 0.6, 0.67]}
                    style={styles.gradientImg}
                />
                <Image source={image} style={styles.image} />
            </View>}
        </>
    )
}

export default ImageBlur