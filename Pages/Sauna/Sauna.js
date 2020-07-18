import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import styles from "../Sauna/SaunaStyle";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import ProgramMenuItem from "../../Components/ProgramMenuItem/ProgramMenuItem";
import SelectedProgram from "../../Components/SelectedProgram/SelectedProgram";

export default class Sauna extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: [
        {
          programName: "Detox",
          programDesc: "",
          nearTemp: 0,
          midTemp: 60,
          farTemp: 70,
          sessionTime: 37,
          icon: "refresh-ccw",
        },
        {
          programName: "Weight Loss",
          programDesc: "",
          nearTemp: 0,
          midTemp: 70,
          farTemp: 75,
          sessionTime: 45,
          icon: "minimize-2",
        },
        {
          programName: "Relaxation",
          programDesc: "",
          nearTemp: 65,
          midTemp: 60,
          farTemp: 65,
          sessionTime: 40,
          icon: "smile",
        },
        {
          programName: "Pain Relief",
          programDesc: "",
          nearTemp: 60,
          midTemp: 70,
          farTemp: 80,
          sessionTime: 50,
          icon: "minimize",
        },
        {
          programName: "Anti Aging",
          programDesc: "",
          nearTemp: 0,
          midTemp: 65,
          farTemp: 70,
          sessionTime: 35,
          icon: "rewind",
        },
        {
          programName: "Cardio",
          programDesc: "",
          nearTemp: 0,
          midTemp: 60,
          farTemp: 70,
          sessionTime: 43,
          icon: "heart",
        },
      ],
      selectedProgram: {},
    };
  }

  startProgram = () => {
    alert("program has been started");
  };

  componentDidMount() {
    this.setState({ selectedProgram: this.state.programs[0] });
  }

  changeActiveProgram(program) {
    this.setState({ selectedProgram: program });
  }

  render() {
    return (
      <LinearGradient
        colors={["#ECEBE6", "#FFF1CC", "#B28F7C"]}
        style={styles.linearGradient}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.programsHeading}>Programs</Text>
        </View>
        <View style={styles.programOptions}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.programs.map((program) => {
              return (
                <ProgramMenuItem
                  data={{
                    program: program,
                    selectedProgram: this.state.selectedProgram,
                  }}
                  callback={this.changeActiveProgram.bind(this)}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.programDetails}>
          <SelectedProgram data={this.state.selectedProgram}></SelectedProgram>
        </View>
        <View style={styles.startBtnContainer}>
          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => this.startProgram()}
          >
            <Text style={styles.startBtnText}>Start Program</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}
