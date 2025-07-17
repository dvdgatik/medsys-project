import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../store/appointmentsSlice';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { useNavigation } from '@react-navigation/native';

const CreateAppointmentScreen: React.FC = () => {
    const [date, setDate] = useState('');
    const [doctor, setDoctor] = useState('');
    const [notes, setNotes] = useState(''); 

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleCreateAppoint = () => {
        if (date && doctor) {
            dispatch(addAppointment({id: uuidv4(), date, doctor, notes}));
            navigation.goBack();
        } 
    }


    return (
        <View style={styles.container}>
            <TextInput placeholder='Date (YYYY-MM-DD)'  style={styles.input} value={date} onChangeText={setDate}/>
            <TextInput placeholder='Doctor' style={styles.input} value={doctor} onChangeText={setDoctor}/>
            <TextInput placeholder="Notes (optional)" style={styles.input} value={notes} onChangeText={setNotes} />
            <Button title='Save Appointment' onPress={handleCreateAppoint}/>
        </View>
    )
}


export default CreateAppointmentScreen;


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    input: { borderWidth: 1, borderColor: '#cccccc', padding: 10, marginBottom: 12, borderRadius: 5 }
})