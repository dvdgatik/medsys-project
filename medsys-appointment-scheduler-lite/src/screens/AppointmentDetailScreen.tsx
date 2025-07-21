import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { CrossPlatformPicker } from "../components/CrossPlatformPicker";
import { AppointmentStatus } from "../types/appointment";
import { useDispatch } from "react-redux";
import { updateAppointment } from "../store/appointmentsSlice";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { StatusTag } from "../components/StatusTag";

type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AppointmentDetail"
>;

type DetailScreenRouteProp = RouteProp<RootStackParamList, "AppointmentDetail">;

export const AppointmentDetailScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const route = useRoute<DetailScreenRouteProp>();

  const appointment = route.params.appointment;

  const [status, setStatus] = useState<AppointmentStatus>(appointment.status);

  const handleSave = () => {
    dispatch(updateAppointment({ id: appointment.id, status }));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Date: {appointment.date}</Text>
        <Text style={styles.label}>Doctor: {appointment.doctor}</Text>
        <Text style={styles.label}>Notes: {appointment.notes || "None"}</Text>
        <Text style={styles.labelStatus}>
          Status: <StatusTag status={status} />
        </Text>
        <Text>Select Status:</Text>
        <CrossPlatformPicker
          selectedValue={status}
          onValueChange={setStatus}
          options={[
            { label: "Pending", value: "Pending" },
            { label: "Confirmed", value: "Confirmed" },
            { label: "Completed", value: "Completed" },
            { label: "Cancelled", value: "Cancelled" },
          ]}
        />
      </View>
      <Button title="Save Changes" onPress={handleSave} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 16, marginBottom: 12 },
  labelStatus: { paddingVertical: 20 },
  detailContainer: { flex: 1, margin: 16 },
});
