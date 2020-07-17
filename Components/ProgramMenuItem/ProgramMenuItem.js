import React, { Component } from "react";

import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class ProgramMenuItem extends Component {
  render() {
    let program = this.props.data;
    console.log("I am called");
    return (
      <TouchableOpacity
        style={{
          height: "100%",
          minWidth: 75,
          //   marginHorizontal: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          name={program.icon}
          size={40}
          color={program.selected ? "#F29100" : "#9A503B"}
        />
        <Text
          style={{
            letterSpacing: 0.5,
            fontSize: 9,
            top: 10,
            color: program.selected ? "#F29100" : "#9A503B ",
          }}
        >
          {program.programName.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }
}
