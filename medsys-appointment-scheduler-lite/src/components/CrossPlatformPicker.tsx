import React from "react";
import { Platform, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

// We create a generic component with <T extends string>
type PickerOption<T> = {
  label: string;
  value: T;
};

type CrossPlatformPickerProps<T extends string> = {
  selectedValue: T;
  onValueChange: (value: T) => void;
  options: PickerOption<T>[];
};

export function CrossPlatformPicker<T extends string>({
  selectedValue,
  onValueChange,
  options,
}: CrossPlatformPickerProps<T>) {
  if (Platform.OS === "web") {
    return (
      <select
        value={selectedValue}
        onChange={(e) => onValueChange(e.target.value as T)} // local casting to type the value
        style={{ padding: 10, fontSize: 16, width: "100%" }}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(value) => onValueChange(value as T)} // secure casting because it comes from picker
      style={styles.picker}
      mode="dropdown"
    >
      {options.map(({ label, value }) => (
        <Picker.Item key={value} label={label} value={value} />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: "100%",
  },
});
