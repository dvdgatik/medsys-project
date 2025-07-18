import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { AppointmentListScreen } from "../screens/AppointmentListScreen";
import { CreateAppointmentScreen } from "../screens/CreateAppointmentScreen";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "../store";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const AppNavigator: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="AppointmentList"
              component={AppointmentListScreen}
              options={{ title: "My Appointments" }}
            />
            <Stack.Screen
              name="CreateAppointment"
              component={CreateAppointmentScreen}
              options={{ title: "Create Appointment" }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Sign In" }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
