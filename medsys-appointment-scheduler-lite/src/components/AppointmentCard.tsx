import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type AppointmentCardProps = {
  date: string;
  doctor: string;
  notes?: string;
  viewMode: "list" | "grid";
};

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  date,
  doctor,
  notes,
  viewMode,
}) => {
  return (
    <View
      style={[
        styles.card,
        viewMode === "grid" ? styles.gridCard : styles.listCard,
      ]}
    >
      <Text style={styles.title}>{date}</Text>
      <Text style={styles.doctor}>Doctor: {doctor}</Text>
      {notes && <Text>Note: {notes}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  listCard: {
    marginBottom: 10,
  },
  gridCard: {
    flex: 1,
    margin: 6,
    minWidth: "30%", // TODO: this is a magic number, calculate
    maxWidth: "33%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  doctor: {
    fontSize: 14,
  },
  notes: {
    marginTop: 6,
    fontSize: 12,
    color: "#555",
  },
});
