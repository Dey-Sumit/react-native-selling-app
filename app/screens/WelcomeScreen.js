import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
    return (
        <ImageBackground style={styles.background}
            blurRadius={4}
            source={require("../assets/background.jpg")} >
            <View style={styles.logoContainer} >
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagLine}>Sell what you don't need!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" />
                <AppButton title="register" color="secondary" />
            </View>
        </ImageBackground >
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 80,
        alignItems: 'center'
    },
    tagLine: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    }

})
