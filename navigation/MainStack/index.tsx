import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomBar from "../BottomBar";
import Success from "../../pages/Main/Success";
import { MainParamList, MainRoutes } from "../../shared/const/routerMain";

const Main = createStackNavigator<MainParamList>();

const MainStack = (): React.ReactElement => {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen component={Success} name={MainRoutes.Success} />
      <Main.Screen component={BottomBar} name={MainRoutes.Homepage} />
    </Main.Navigator>
  );
};

export default MainStack;
