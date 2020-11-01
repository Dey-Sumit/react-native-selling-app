import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.Screen, style]}>

            <View style={style}>
                {children}

            </View>
        </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({

    Screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }

})
