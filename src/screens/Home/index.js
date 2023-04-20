import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ImageBlur from '../../components/ImageBlur'

const HomeScreen = () => {
    return (
        <View style={styles.main}>
            <ImageBlur />
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen