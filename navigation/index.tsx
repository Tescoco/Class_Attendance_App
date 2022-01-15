/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import RootScreen from "../screens/Root";
import LoginScreen from "../screens/Login";

import { RootStackParamList } from "../types";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [screenType, setscreenType] = React.useState("");

  const getTokenAge = (last_SignUp: number) => {
    const nowTime = Date.now();

    const hour = 3600000;

    return Math.round((nowTime - last_SignUp) / hour) + 1;
  };

  const checkNewUser = async () => {
    try {
      const value = await AsyncStorage.getItem("data");
      if (value !== null) {
        if (getTokenAge(JSON.parse(value).last_SignUp) > 5) {
          setscreenType("Login");
        } else {
          setscreenType("Root");
        }
      } else {
        setscreenType("Login");
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    checkNewUser();
  }, []);

  return (
    <Stack.Navigator>
      {screenType == "Login" ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
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
