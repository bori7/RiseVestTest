import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { store } from "./store";
import { ToastProvider } from "react-native-toast-notifications";
import React, { useEffect } from "react";
import CustomToast from "./shared/components/CustomToast";
import InactivityWrapper from "./shared/components/InactivityWrapper";
import Wrapper from "./shared/components/Wrapper";
import { Provider as PaperProvider } from "react-native-paper";
import SplashScreen from "react-native-splash-screen";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <InactivityWrapper>
        <SafeAreaProvider>
          <ToastProvider
            offsetTop="6%"
            swipeEnabled
            renderToast={(toast) => <CustomToast toast={toast} />}
          >
            <Provider store={store}>
              <PaperProvider>
                <Wrapper child={<Navigation colorScheme={colorScheme} />} />
                <StatusBar />
              </PaperProvider>
            </Provider>
          </ToastProvider>
        </SafeAreaProvider>
      </InactivityWrapper>
    );
  }
}
