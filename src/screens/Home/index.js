import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import ImageBlur from '../../components/ImageBlur'

const HomeScreen = () => {

    const [image, setImage] = useState(require('../../assets/images/music.jpg'))

    return (
        <View style={styles.main}>
            <ImageBlur image={image} />
            <Text>HomeScreen</Text>
            <View style={styles.btnContainer}>
                <View style={styles.btnContainerPart}>
                    <Text style={styles.btnText}
                        onPress={() => setImage(require('../../assets/images/music.jpg'))}
                    >0</Text>
                    <Text style={styles.btnText}
                        onPress={() => setImage(require('../../assets/images/FB_IMG_1678919106501.jpg'))}
                    >1</Text>
                    <Text style={styles.btnText}
                        onPress={() => setImage(require('../../assets/images/FB_IMG_1678919116972.jpg'))}
                    >2</Text>
                    <Text style={styles.btnText}
                        onPress={() => setImage(require('../../assets/images/FB_IMG_1678921796956.jpg'))}
                    >3</Text>
                </View>
                <View style={styles.btnContainerPart}>
                    <Text style={styles.btnText}
                        onPress={() => setImage(require('../../assets/images/FB_IMG_1679762384925.jpg'))}
                    >4</Text>
                    <Text style={styles.btnText}
                        onPress={() => setImage(require('../../assets/images/FB_IMG_1678921791370.jpg'))}
                    >5</Text>
                    <Text style={styles.btnText}
                        onPress={() => setImage(require('../../assets/images/FB_IMG_1679762776398.jpg'))}
                    >6</Text>
                    <Text style={styles.btnText}
                        onPress={() => setImage(require('../../assets/images/umbrella-nightcore.jpg'))}
                    >7</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen