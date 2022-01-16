import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [page, setPage] = useState("");

  const getTokenAge = (last_SignUp: number) => {
    const nowTime = Date.now();

    const hour = 3600000;

    return Math.round((nowTime - last_SignUp) / hour) + 1;
  };

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        //check if token is availavle
        const value = await AsyncStorage.getItem("data");
        if (value !== null) {
          if (getTokenAge(JSON.parse(value).last_SignUp) > 5) {
            setPage("Login");
          } else {
            setPage("Root");
          }
        } else {
          setPage("Login");
        }

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete, page };
}
