import React from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addAppointment } from "../store/appointmentsSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerInput from "../components/DateTimePickerInput";

// validation scheme with yup
const schema = yup.object().shape({
  date: yup.date().required("Appointment date is required"),
  doctor: yup.string().required("Doctor is required"),
  notes: yup.string().optional(),
});

export const CreateAppointmentScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      date: new Date(),
      doctor: "",
      notes: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    dispatch(
      addAppointment({
        id: uuidv4(),
        date: data.date.toISOString().split("T")[0],
        doctor: data.doctor,
        notes: data.notes,
      })
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Appointment Date</Text>
      <Controller
        control={control}
        name="date"
        render={({ field: { value, onChange } }) => (
          <DateTimePickerInput value={value} onChange={onChange} />
        )}
      />
      {errors.date && <Text style={styles.error}>{errors.date.message}</Text>}

      <TextInput
        placeholder="Doctor"
        style={styles.input}
        onChangeText={(text) => setValue("doctor", text)}
      />
      {errors.doctor && (
        <Text style={styles.error}>{errors.doctor.message}</Text>
      )}

      <Controller
        control={control}
        name="notes"
        render={({ field: { value, onChange } }) => (
          <TextInput
            placeholder="Notes (optional)"
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Button title="Create" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
  },
  label: {
    fontWeight: "600",
    marginBottom: 6,
  },
  error: {
    color: "red",
    marginBottom: 8,
  },
});
