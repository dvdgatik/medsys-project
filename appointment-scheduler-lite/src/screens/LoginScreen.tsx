import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { login } from '../store/authSlice'

export default function LoginScreen() {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login({id: '1', name: 'David Gatica', email: 'dvdgatic@gmail.com'}))
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder="Password" style={styles.input}/>
            <Button title='Sign In' onPress={handleLogin}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16},
    title: { fontSize: 24, marginBottom: 16, textAlign: 'center'},
    input: { borderWidth: 1, borderColor: '#cccccc', padding: 10, marginBlockEnd: 12, borderRadius: 5}
})