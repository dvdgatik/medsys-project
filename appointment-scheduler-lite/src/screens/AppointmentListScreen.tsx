import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AppointmentList'>
const AppointmentListScreen: React.FC = () => {
    const appointments = useSelector((state: RootState) => state.appointments.appointments);
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={styles.item}>
                            <Text>{item.date} - {item.doctor}</Text>
                            {item.notes && <Text style={styles.notes}>{item.notes}</Text> }
                    </View>
                )}  
            />
            <Button title='Create New Appoint.' onPress={()=>navigation.navigate('CreateAppointment')}/>
        </View>
    )
}


export default AppointmentListScreen;


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16},
    item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eeeeee'},
    notes: { fontStyle: 'italic', color: '#555'}
})
