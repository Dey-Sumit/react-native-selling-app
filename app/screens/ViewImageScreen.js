import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="delete" color="white" size={30} />
            </View>
            <Image source={require('../assets/chair.jpg')} style={styles.image} resizeMode="contain" />
        </View>
    )
}

export default ViewImageScreen

const styles = StyleSheet.create({

    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },

    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        position: 'absolute',
        top: 50,
        right: 30
    },

    image: {
        width: '100%',
        height: '100%',
    }
})
