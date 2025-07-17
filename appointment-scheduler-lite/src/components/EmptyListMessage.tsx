import React from 'react';
import {View, Text, StyleSheet } from 'react-native';


type EmptyListMessageProps = {
    message?: string;
}


const EmptyListMessage = ({ message = "No items available"} : EmptyListMessageProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ message }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
    },
});


export default EmptyListMessage;