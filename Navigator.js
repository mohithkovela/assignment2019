import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Pages/Home/Home";
import Sauna from "./Pages/Sauna/Sauna";
import Enhance from "./Pages/Enhance/Enhance";
import Social from "./Pages/Social/Social";
import Shop from "./Pages/Shop/Shop";
import Icon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home": {
                iconName = "home";
                break;
              }
              case "Sauna": {
                iconName = "menu";
                break;
              }
              case "Enhance": {
                iconName = "sun";
                break;
              }
              case "Social": {
                iconName = "users";
                break;
              }
              case "Shop": {
                iconName = "shopping-cart";
                break;
              }
            }
            return (
              <Icon
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: "#9A503B",
          inactiveBackgroundColor: "#9A503B",
          activeTintColor: "#FAB901",
          inactiveTintColor: "white",
          tabStyle: { paddingVertical: 15 },
          labelStyle:{top: 10, letterSpacing: 1},
          style: {height: "10%"}
        }}
        initialRouteName="Sauna"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "HOME",
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Sauna"
          component={Sauna}
          options={{
            tabBarLabel: "SAUNA",
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Enhance"
          component={Enhance}
          options={{
            tabBarLabel: "ENHANCE",
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Social"
          component={Social}
          options={{
            tabBarLabel: "SOCIAL",
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarLabel: "SHOP",
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
