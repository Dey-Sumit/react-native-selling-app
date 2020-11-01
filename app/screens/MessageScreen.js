import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'


const initialMessages = [{
    id: 1,
    title: 't1',
    description: 'd1',
    image: require('../assets/mosh.jpg')
},
{
    id: 2,
    title: 't1',
    description: 'd1',
    image: require('../assets/mosh.jpg')
}]


const MessageScreen = () => {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen >
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem title={item.title} subTitle={item.description} image={item.image}
                        onPress={() => console.log("Message ", item.title)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}

                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([{
                        id: 1,
                        title: 'toooo',
                        description: 'd1',
                        image: require('../assets/mosh.jpg')
                    },])
                }}

            />
        </Screen>
    )
}

export default MessageScreen

const styles = StyleSheet.create({



})
