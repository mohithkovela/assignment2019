import React, { Component } from "react";

import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default class ProgramMenuItem extends Component {
  selectProgram(index) {
    this.props.callback(index);
  }

  render() {
    let program = this.props.data.program;
    let programIndex = this.props.data.programIndex;
    let selectedProgram = this.props.data.selectedProgram;
    return (
      <TouchableOpacity
        onPress={() => {
          this.selectProgram(programIndex);
        }}
        style={{
          height: "100%",
          minWidth: 75,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          name={program.icon}
          size={40}
          color={
            program.programName == selectedProgram.programName
              ? "#F29100"
              : "#9A503B"
          }
        />
        <Text
          style={{
            letterSpacing: 0.5,
            fontSize: 9,
            top: 10,
            color:
              program.programName == selectedProgram.programName
                ? "#F29100"
                : "#9A503B",
          }}
        >
          {program.programName.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }
}
