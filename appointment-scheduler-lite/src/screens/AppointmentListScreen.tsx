import React, { useState } from "react";
import { View, Text, FlatList, Button, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AppointmentCard from "../components/AppointmentCard";
import EmptyListMessage from "../components/EmptyListMessage";
import { MaterialIcons } from '@expo/vector-icons';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AppointmentList'>;

const AppointmentListScreen: React.FC = () => {
    const appointments = useSelector((state: RootState) => state.appointments.appointments);
    const navigation = useNavigation<NavigationProp>();

    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

    return (
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <Pressable
                    style={[styles.toggleButton, viewMode === 'list' && styles.activeButton]}
                    onPress={() => setViewMode('list')}
                    >
                    <MaterialIcons name="view-list" size={24} color={viewMode === 'list' ? '#fff' : '#333'} />
                </Pressable>

                <Pressable
                    style={[styles.toggleButton, viewMode === 'grid' && styles.activeButton]}
                    onPress={() => setViewMode('grid')}
                >
                <MaterialIcons name="grid-view" size={24} color={viewMode === 'grid' ? '#fff' : '#333'} />
                </Pressable>
            </View>
                <FlatList
                    key={viewMode} // force new render at the moment to change numColumns
                    data={appointments}
                    keyExtractor={(item, index) => {
                        if ('id' in item) return item.id.toString();
                        return index.toString(); // fallback if there's no id
                    }}
                    renderItem={({ item }) => (
                        <AppointmentCard
                            date={item.date}
                            doctor={item.doctor}
                            notes={item.notes}
                            viewMode={viewMode}
                        />
                    )}
                    numColumns={viewMode === 'grid' ? 3 : 1}
                    columnWrapperStyle={viewMode === 'grid' ? styles.row : undefined}
                    contentContainerStyle={appointments.length === 0 ? styles.emptyContainer : undefined}
                    ListEmptyComponent={<EmptyListMessage message="No appointments Available"/>}
                />

                <Button
                    title="Crear nueva cita"
                    onPress={() => navigation.navigate("CreateAppointment")}
                />
        </View>
    );
};

export default AppointmentListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleButton: {
    padding: 8,
    marginLeft: 8,
    borderRadius: 6,
    backgroundColor: '#e0e0e0',
    },
    emptyText: {
        fontSize: 16,
        color: 'gray',
    },
    activeButton: {
        backgroundColor: '#6200ee',
    },
});
