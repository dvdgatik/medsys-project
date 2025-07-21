import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppointmentStatus } from "../types";

interface StatusTagProps {
  status: AppointmentStatus;
}

const statusColors = {
  Pending: {
    backgroundColor: "#FEF9C3", // yellow-200
    textColor: "#A16207", // yellow-800
  },
  Confirmed: {
    backgroundColor: "#DBEAFE", // blue-200
    textColor: "#1E40AF", // blue-800
  },
  Completed: {
    backgroundColor: "#BBF7D0", // green-200
    textColor: "#166534", // green-800
  },
  Cancelled: {
    backgroundColor: "#FECACA", // red-200
    textColor: "#991B1B", // red-800
  },
};

export const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const colors = statusColors[status];
  return (
    <View
      style={[styles.tagContainer, { backgroundColor: colors.backgroundColor }]}
    >
      <Text style={[styles.tagText, { color: colors.textColor }]}>
        {status}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    alignSelf: "flex-start",
  },
  tagText: {
    fontSize: 12,
    fontWeight: "500",
  },
});
