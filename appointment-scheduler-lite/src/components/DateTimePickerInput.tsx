import React, { useState } from "react";
import { View, Text, Pressable, Platform, StyleSheet } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { format } from "date-fns";

type Mode = "date" | "time";

interface DateTimePickerInputProps {
  label?: string;
  mode?: Mode;
  value: Date;
  onChange: (date: Date) => void;
  minimumDate?: Date;
  maximumDate?: Date;
}

const DateTimePickerInput: React.FC<DateTimePickerInputProps> = ({
  label = "",
  mode = "date",
  value,
  onChange,
  minimumDate,
  maximumDate,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowPicker(false);
    if (event.type === "set" && selectedDate) {
      onChange(selectedDate);
    }
  };

  // Format date/time to show and to web input value
  const formattedDisplay =
    mode === "date" ? format(value, "dd/MM/yyyy") : format(value, "HH:mm");

  const formattedWebValue =
    mode === "date"
      ? value.toISOString().split("T")[0] // yyyy-MM-dd  input[type=date]
      : value.toTimeString().slice(0, 5); // HH:mm input[type=time]

  const handleWebChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (mode === "date") {
      onChange(new Date(val + "T00:00:00"));
    } else {
      const [hours, minutes] = val.split(":").map(Number);
      const newDate = new Date(value);
      newDate.setHours(hours, minutes);
      onChange(newDate);
    }
  };

  if (Platform.OS === "web") {
    // Render for web using native input HTML
    return (
      <View style={styles.container}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <input
          type={mode === "date" ? "date" : "time"}
          value={formattedWebValue}
          onChange={handleWebChange}
          style={styles.webInput}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <Pressable onPress={() => setShowPicker(true)} style={styles.input}>
        <Text style={styles.text}>{formattedDisplay}</Text>
      </Pressable>
      {showPicker && (
        <DateTimePicker
          value={value}
          mode={mode}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      )}
    </View>
  );
};

export default DateTimePickerInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: "#333",
  },
  input: {
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#f0f0f0",
  },
  text: {
    color: "#000",
    fontSize: 16,
  },
  webInput: {
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    borderWidth: 1,
  },
});
