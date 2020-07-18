import React, { Component } from "react";

import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "../SelectedProgram/SelectedProgramStyle";
export default class SelectedProgram extends Component {
  render() {
    let program = this.props.data;
    return (
      <View style={styles.container}>
        <Icon
          name={program.icon}
          size={75}
          color={"#9A503B"}
          style={{ paddingVertical: 15 }}
        ></Icon>
        <Text style={[styles.pageText, styles.programName]}>
          {program.programName}
        </Text>
        <Text style={styles.pageText}>
          {program.programDesc
            ? program.programDesc
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat neque nisi, id hendrerit dui lacinia sit amet."}
        </Text>
        <View style={styles.programDetails}>
          {program.nearTemp ? (
            <View style={styles.heaterConfiguration}>
              <View
                style={{
                  ...styles.heaterCircle,
                  backgroundColor: "#9A503B",
                }}
              ></View>
              <Text style={styles.heaterText}>NEAR</Text>
            </View>
          ) : (
            <View></View>
          )}

          <View style={styles.heaterConfiguration}>
            <View
              style={{
                ...styles.heaterCircle,
                backgroundColor: "#F29100",
              }}
            ></View>
            <Text style={styles.heaterText}>MID</Text>
          </View>
          <View style={styles.heaterConfiguration}>
            <View
              style={{
                ...styles.heaterCircle,
                backgroundColor: "#FAB901",
              }}
            ></View>
            <Text style={styles.heaterText}>FAR</Text>
          </View>
          <View style={styles.programTimeContainer}>
            <Text style={[styles.ProgramTime, styles.pageText]}>
              {program.sessionTime}
            </Text>
            <Text style={styles.pageText}>Min.</Text>
          </View>
        </View>
      </View>
    );
  }
}
