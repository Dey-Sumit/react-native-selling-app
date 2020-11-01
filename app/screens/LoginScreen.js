import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import * as Yup from 'yup'


import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")

})


const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image source={require("../assets/logo-red.png")} style={styles.logo} />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema} >

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Email"
                    keyboardType="email-address"
                    name="email"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                />

                <SubmitButton title="login" />
            </AppForm>

        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    container: {
        padding: 5
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center'
    }


})
