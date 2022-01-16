import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

export default function App() {
  const { isLoadingComplete, page } = useCachedResources();

  if (!isLoadingComplete) {
    //check whick screen to load based on
    //availablity of token
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation page={page} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
