import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { restoreSession } from "../store/authSlice";

const USER_STORAGE_KEY = "@user_session";

export const SessionLoader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      try {
        const jsonValue = await AsyncStorage.getItem(USER_STORAGE_KEY);
        if (jsonValue) {
          const user = JSON.parse(jsonValue);
          dispatch(restoreSession(user));
        } else {
          dispatch(restoreSession(null));
        }
      } catch (e) {
        console.error("Failed to load session", e);
        dispatch(restoreSession(null));
      } finally {
        setLoading(false);
      }
    }

    loadSession();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
};
