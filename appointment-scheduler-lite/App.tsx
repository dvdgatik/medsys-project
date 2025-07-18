import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { SessionLoader } from "./src/components/SessionLoader";

export default function App() {
  return (
    <Provider store={store}>
      <SessionLoader>
        <AppNavigator />
      </SessionLoader>
    </Provider>
  );
}
