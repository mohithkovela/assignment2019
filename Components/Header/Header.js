import React, { Component } from "react";

import Icon from "react-native-vector-icons/Feather";

import { View, TouchableOpacity, Image, Text } from "react-native";

import styles from "../Header/HeaderStyle";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name={"user"} size={25} style={styles.icon} />
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          source={require("../../Images/logo.png")}
          style={styles.logo}
        ></Image>
        <TouchableOpacity>
          <Icon name={"shopping-cart"} size={25} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
