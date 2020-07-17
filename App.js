import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "./Components/Header/Header";
import TabNavigator from "./Navigator";

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
    backgroundColor: "#fff",
  },
});
