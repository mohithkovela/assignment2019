import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import styles from "../Sauna/SaunaStyle";

export default class Sauna extends Component {
  render() {
    return (
      // <View style={styles.pageContainer}>
        <LinearGradient
          colors={["#ECEBE6", "#FFF1CC", "#B28F7C"]}
          style={styles.linearGradient}
        ></LinearGradient>
      // </View>
    );
  }
}
