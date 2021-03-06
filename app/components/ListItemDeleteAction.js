import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can" size={30} color="white" />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 50,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },


})
