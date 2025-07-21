import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusTag } from "./StatusTag";
import { AppointmentStatus } from "../types";
import { format } from "date-fns";

export type AppointmentCardProps = {
  date: string;
  doctor: string;
  notes?: string;
  viewMode: "list" | "grid";
  status: AppointmentStatus;
  onViewDetail?: () => void;
  index?: number; // add alternate color in list mode
};

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  date,
  doctor,
  notes,
  viewMode,
  status,
  onViewDetail,
  index = 0,
}) => {
  // In list mode, alternate card background
  const backgroundColor =
    viewMode === "list" && index % 2 === 0 ? "#e8f0fe" : "#f9f9f9";

  const formatDate = format(date, "EEEE, MMMM d, yyyy");

  return (
    <View
      style={[
        styles.card,
        viewMode === "grid" ? styles.gridCard : styles.listCard,
        viewMode === "list" && { backgroundColor },
      ]}
    >
      {viewMode === "list" ? (
        <>
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>{formatDate}</Text>
              <Text style={styles.doctor}>Doctor: {doctor}</Text>
            </View>
            <StatusTag status={status} />
          </View>
          {notes ? <Text style={styles.notes}>Note: {notes}</Text> : null}
          {onViewDetail && (
            <TouchableOpacity style={styles.viewButton} onPress={onViewDetail}>
              <MaterialIcons name="remove-red-eye" size={20} color="#fff" />
              <Text style={styles.viewButtonText}> View</Text>
            </TouchableOpacity>
          )}
        </>
      ) : (
        // Grid mode
        <>
          <Text style={styles.title}>{date}</Text>
          <Text style={styles.doctor}>Doctor: {doctor}</Text>
          {notes ? <Text style={styles.notes}>Note: {notes}</Text> : null}
          <View style={styles.gridFooter}>
            <StatusTag status={status} />
            {onViewDetail && (
              <TouchableOpacity
                style={styles.viewButtonGrid}
                onPress={onViewDetail}
              >
                <MaterialIcons
                  name="remove-red-eye"
                  size={20}
                  color="#007bff"
                />
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 12,
    borderRadius: 8,
  },
  listCard: {
    marginBottom: 10,
    backgroundColor: "#f9f9f9", // color default para lista
  },
  gridCard: {
    flex: 1,
    margin: 6,
    minWidth: "30%",
    maxWidth: "33%",
    backgroundColor: "#f9f9f9",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  doctor: {
    fontSize: 14,
    marginTop: 2,
  },
  notes: {
    fontSize: 12,
    color: "#555",
    marginTop: 6,
  },
  viewButton: {
    marginTop: 10,
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  viewButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  gridFooter: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewButtonGrid: {
    padding: 4,
  },
});
