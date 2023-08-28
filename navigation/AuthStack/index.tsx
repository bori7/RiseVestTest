import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import BetterPerformance from "../../pages/Auth/BetterPerformance";
import QualityAssets from "../../pages/Auth/QualityAssets";
import SetPin from "../../pages/Auth/SetPin";
import SignIn from "../../pages/Auth/SignIn";
import SignUp from "../../pages/Auth/SignUp";
import SuperiorSelection from "../../pages/Auth/SuperiorSelection";
import TellUsMore from "../../pages/Auth/TellUsMore";
import WelcomeScreen from "../../pages/Auth/WelcomeScreen";
import { AuthParamList, AuthRoutes } from "../../shared/const/routerAuth";
import { RootState } from "../../store";
import { getStuffFromSecureStore } from "../../shared/helper";
import { IS_RISE_USER_KEY } from "../../constants/values";

const Auth = createStackNavigator<AuthParamList>();

const AuthStack = (): React.ReactElement => {
  const getIsRiseUser = async () => {
    // console.log("Trying to get RISE USER KEY");
    try {
      const key: any = await getStuffFromSecureStore(IS_RISE_USER_KEY);
      console.log("RISE USER KEY:: ", key);
    } catch (error) {
      console.log("error while trying to get stuff from store", error);
      return "";
    }
  };

  return (
    <Auth.Navigator
      screenOptions={
        {
          // headerMode: "float",
          //@ts-ignore
          // header: (props) => <HeaderAuthForNavigate {...props} />,
        }
      }
    >
      {!!getIsRiseUser() ? (
        <>
          <Auth.Screen
            component={SignIn}
            name={AuthRoutes.SignIn}
            options={{ headerShown: false }}
          />
          <Auth.Screen
            component={WelcomeScreen}
            name={AuthRoutes.Welcome}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Auth.Screen
            component={WelcomeScreen}
            name={AuthRoutes.Welcome}
            options={{ headerShown: false }}
          />
        </>
      )}

      <Auth.Screen
        component={QualityAssets}
        name={AuthRoutes.QualityAssets}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        component={SuperiorSelection}
        name={AuthRoutes.SuperiorSelection}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        component={BetterPerformance}
        name={AuthRoutes.BetterPerformance}
        options={{ headerShown: false }}
      />

      <Auth.Screen
        component={SignUp}
        name={AuthRoutes.SignUp}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        component={TellUsMore}
        name={AuthRoutes.TellUsMore}
        options={{ headerShown: false }}
      />

      <Auth.Screen
        component={SetPin}
        name={AuthRoutes.SetPin}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
};

export default AuthStack;
