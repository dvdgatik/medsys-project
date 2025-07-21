import React, { useState, useEffect } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

interface AppointmentSearchBarProps {
  onSearchChange: (term: string) => void;
}

export const AppointmentSearchBar: React.FC<AppointmentSearchBarProps> = ({
  onSearchChange,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearchChange(searchTerm);
  }, [searchTerm]);

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search by date, doctor or note"
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {searchTerm.length > 0 && (
        <Pressable onPress={() => setSearchTerm("")} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>✕</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  clearButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  clearButtonText: {
    fontSize: 16,
    color: "#999",
  },
});
