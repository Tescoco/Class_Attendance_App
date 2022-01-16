/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import RootScreen from "../screens/Root";
import LoginScreen from "../screens/Login";

import { RootStackParamList } from "../types";

interface props {
  page: string;
}

export default function Navigation({ page }: props) {
  return (
    <NavigationContainer>
      <RootNavigator page={page} />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({ page }: props) {
  return (
    <Stack.Navigator>
      {page == "Login" && (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Root"
            component={RootScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
      {page == "Root" && (
        <Stack.Screen
          name="Root"
          component={RootScreen}
          options={{ headerShown: false }}
        />
      )}

      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}
