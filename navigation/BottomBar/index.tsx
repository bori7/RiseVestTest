import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image, StyleSheet } from "react-native";
import { IconBottomBar, COLORS } from "../../constants/Colors";
import Homepage from "../../pages/Main/Homepage";
import { TabOptions } from "../../shared/const/routerBottomBar";
import { View, Text } from "../../components/Themed";

const Tab = createBottomTabNavigator();

const TAB_OPTIONS: TabOptions = {
  Home: {
    label: "Home",
    icon: IconBottomBar.Home,
    component: Homepage as React.FC,
  },
  Dashboard: {
    label: "Dashboard",
    icon: IconBottomBar.Plans,
    component: Homepage as React.FC,
  },
  Chat: {
    label: "Chat",
    icon: IconBottomBar.Wallet,
    component: Homepage as React.FC,
  },
  Transact: {
    label: "Transact",
    icon: IconBottomBar.Feed,
    component: Homepage as React.FC,
  },
  Services: {
    label: "Services",
    icon: IconBottomBar.Account,
    component: Homepage as React.FC,
  },
};

const BottomTabNavigator = (): React.ReactElement => {
  const getTabOptions = (name: keyof typeof TAB_OPTIONS) => ({
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <View style={styles.containerItem}>
        <View style={[styles.containerIcon, focused && styles.focusIcon]}>
          <Image
            resizeMode="contain"
            source={TAB_OPTIONS[name].icon}
            style={
              focused
                ? styles.iconInFocus
                : TAB_OPTIONS[name].label === "Chat"
                ? styles.iconChat
                : styles.icon
            }
          />
        </View>
        <Text
          style={{
            color: COLORS.Light.colorFour,
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          {TAB_OPTIONS[name].label}
        </Text>
      </View>
    ),
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
    height: 76,
    backgroundColor: COLORS.Light.colorSix,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  containerItem: {
    alignItems: "center",
    gap: 8,
  },
  containerIcon: {
    height: 32,
    width: 54,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  icon: {
    height: 28,
    width: 28,
  },
  iconChat: {
    height: 32,
    width: 32,
  },
  iconInFocus: {
    height: 24,
    width: 24,
  },
  focusIcon: {
    backgroundColor: COLORS.Light.colorOne,
  },
});

export default BottomTabNavigator;
