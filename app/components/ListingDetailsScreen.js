import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'
import ListItem from './ListItem'

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/chair.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket</AppText>
                <AppText style={styles.price}>"subtitle"</AppText>


                <View style={styles.userContainer}>
                    <ListItem title="Sumit Dey"
                        subTitle="4 Listings"
                        image={require('../assets/mosh.jpg')} />

                </View>


            </View>
        </View>
    )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },

    title: {
        fontSize: 24,
        fontWeight: "500",
        marginVertical: 10

    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20
    },
    userContainer: {
        marginVertical: 20
    }

})
