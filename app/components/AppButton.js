import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

const AppButton = ({ title, onPress, color = "primary" }) => {
    return (
        <TouchableOpacity style={[styles.button,
        { backgroundColor: colors[color] }]}
            onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 5,
        width: '100%'
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase'
    }
})
