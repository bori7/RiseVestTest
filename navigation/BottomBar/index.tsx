import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/Colors";
import Homepage from "../../pages/Main/Homepage";
import { TabOptions } from "../../shared/const/routerBottomBar";
import { View, Text } from "../../components/Themed";

import Home from "../../shared/assets/images/svg/home_icon.svg";
import Plans from "../../shared/assets/images/svg/plans_icon.svg";
import Wallet from "../../shared/assets/images/svg/wallet_icon.svg";
import Feed from "../../shared/assets/images/svg/feed_icon.svg";
import Account from "../../shared/assets/images/svg/account_holder.svg";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_OPTIONS: TabOptions = {
  Home: {
    label: "Home",
    // icon: <Entypo name="home" size={24} color={COLORS.Light.colorSix} />,
    icon: ({ color }: { color: string }) => {
      return <Home fill={color} />;
    },
    component: Homepage as React.FC,
  },
  Plans: {
    label: "Plans",
    // icon: <Octicons name="stack" size={24} color={COLORS.Light.colorSix} />,
    icon: ({ color }: { color: string }) => {
      return <Plans fill={color} />;
    },
    component: Homepage as React.FC,
  },
  Wallet: {
    label: "Wallet",
    // icon: (
    //   <Ionicons name="ios-wallet" size={24} color={COLORS.Light.colorSix} />
    // ),
    icon: ({ color }: { color: string }) => {
      return <Wallet fill={color} />;
    },
    component: Homepage as React.FC,
  },
  Feed: {
    label: "Feed",
    // icon: (
    //   <MaterialCommunityIcons
    //     name="view-dashboard"
    //     size={24}
    //     color={COLORS.Light.colorSix}
    //   />
    // ),
    icon: ({ color }: { color: string }) => {
      return <Feed fill={color} />;
    },
    component: Homepage as React.FC,
  },
  Account: {
    label: "Account",
    icon: ({ color }: { color: string }) => {
      return <Account />;
    },
    component: Homepage as React.FC,
  },
};

const BottomTabNavigator = (): React.ReactElement => {
  const getTabOptions = (name: keyof typeof TAB_OPTIONS) => ({
    tabBarIcon: ({ focused }: { focused: boolean }) => {
      const CompToRender = TAB_OPTIONS[name].icon;
      return (
        <View style={styles.containerItem}>
          <View
            style={[
              styles.containerIcon,
              focused &&
                TAB_OPTIONS[name].label === "Account" &&
                styles.focusIcon,
            ]}
          >
            <CompToRender
              color={focused ? COLORS.Light.colorOne : COLORS.Light.colorSix}
            />
          </View>

          <Text
            style={{
              color: focused ? COLORS.Light.colorOne : COLORS.Light.colorFour,
              fontSize: SIZES.sizeSix,
              fontWeight: "200",
            }}
          >
            {focused ? (
              <Octicons
                name="dot-fill"
                size={20}
                color={COLORS.Light.colorOne}
              />
            ) : (
              TAB_OPTIONS[name].label
            )}
          </Text>
        </View>
      );
    },
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      {Object.keys(TAB_OPTIONS).map((name) => (
        <Tab.Screen
          key={name}
          component={TAB_OPTIONS[name].component}
          name={name}
          options={getTabOptions(name)}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 100,
    backgroundColor: COLORS.Light.background,
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  containerItem: {
    alignItems: "center",
    gap: 8,
    marginBottom: 15,
  },
  containerIcon: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  focusIcon: {
    backgroundColor: COLORS.Light.colorOne,
  },
});

export default BottomTabNavigator;
