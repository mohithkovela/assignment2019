import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Header from "./Components/Header/Header";
import TabNavigator from "./Navigator";

const windowHeight = Dimensions.get('window').height;

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: windowHeight,
    backgroundColor: "#fff",
  },
});
