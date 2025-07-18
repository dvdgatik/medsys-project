import React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ViewToggleButtonProps {
  mode: "list" | "grid";
  currentMode: "list" | "grid";
  onPress: (mode: "list" | "grid") => void;
  style?: StyleProp<ViewStyle>;
  activeStyle?: StyleProp<ViewStyle>;
}

export const ViewToggleButton: React.FC<ViewToggleButtonProps> = ({
  mode,
  currentMode,
  onPress,
  style,
  activeStyle,
}) => {
  const isActive = currentMode === mode;
  const iconName = mode === "list" ? "view-list" : "grid-view";

  return (
    <Pressable
      style={[style, isActive && activeStyle]}
      onPress={() => onPress(mode)}
    >
      <MaterialIcons
        name={iconName}
        size={24}
        color={isActive ? "#fff" : "#333"}
      />
    </Pressable>
  );
};
