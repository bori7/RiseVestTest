import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GoalName from "../../pages/CreatePlan/GoalName";
import Intro from "../../pages/CreatePlan/Intro";
import PlanDetails from "../../pages/CreatePlan/PlanDetails";
import Review from "../../pages/CreatePlan/Review";
import TargetAmount from "../../pages/CreatePlan/TargetAmount";
import TargetDate from "../../pages/CreatePlan/TargetDate";
import {
  CreatePlanParamList,
  CreatePlanRoutes,
} from "../../shared/const/routerCreatePlan";

const Plan = createStackNavigator<CreatePlanParamList>();

const PlanStack = (): React.ReactElement => {
  return (
    <Plan.Navigator
      initialRouteName={CreatePlanRoutes.Intro}
      screenOptions={{ headerShown: false }}
    >
      <Plan.Screen
        component={Intro}
        name={CreatePlanRoutes.Intro}
        options={{ headerShown: false }}
      />
      <Plan.Screen
        component={GoalName}
        name={CreatePlanRoutes.GoalName}
        options={{ headerShown: false }}
      />
      <Plan.Screen
        component={PlanDetails}
        name={CreatePlanRoutes.PlanDetails}
        options={{ headerShown: false }}
      />
      <Plan.Screen
        component={Review}
        name={CreatePlanRoutes.Review}
        options={{ headerShown: false }}
      />
      <Plan.Screen
        component={TargetAmount}
        name={CreatePlanRoutes.TargetAmount}
        options={{ headerShown: false }}
      />
      <Plan.Screen
        component={TargetDate}
        name={CreatePlanRoutes.TargetDate}
        options={{ headerShown: false }}
      />
    </Plan.Navigator>
  );
};

export default PlanStack;
