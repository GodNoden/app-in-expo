import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./LOGIN"
import Pantallab from "./Pantallab";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="pantallab" component={Pantallab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
