import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import styles from "../Sauna/SaunaStyle";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

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
        {
          programName: "Custom",
          icon: "settings",
        },
      ],
      selectedProgram: {},
      customPrograms: [],
      programNameEditText: "",
      sessionLengthEditText: "",
    };
  }

  startProgram = () => {
    if (
      this.state.selectedProgram &&
      this.state.selectedProgram.programName != "Custom"
    ) {
      alert("program has been started");
    }
    if (
      this.state.selectedProgram.programName == "Custom" &&
      this.state.programNameEditText &&
      this.state.sessionLengthEditText
    ) {
      this.setState({
        customPrograms: [
          ...this.state.customPrograms,
          {
            programName: this.state.programNameEditText,
            programDesc: "",
            nearTemp: 0,
            midTemp: 60,
            farTemp: 70,
            sessionTime: this.state.sessionLengthEditText,
          },
        ],
        programNameEditText: "",
        sessionLengthEditText: "",
      });
    }
  };

  componentDidMount() {
    this.setState({ selectedProgram: this.state.programs[6] });
  }

  changeActiveProgram(program) {
    this.setState({ selectedProgram: program });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.pageContainer}>
        <LinearGradient
          colors={["#ECEBE6", "#FFF1CC", "#B28F7C"]}
          style={styles.pageContainer}
        >
          <View style={styles.headingContainer}>
            <Text style={styles.programsHeading}>Programs</Text>
          </View>
          <View style={styles.programOptions}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.programs.map((program, index) => {
                return (
                  <ProgramMenuItem
                    key={index}
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
            {this.displayProgramDetails(this.state.selectedProgram)}
          </View>
          <View style={styles.startBtnContainer}>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => this.startProgram()}
            >
              {this.getStartButtonText(this.state.selectedProgram)}
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }

  getStartButtonText(selectedProgram) {
    if (selectedProgram && selectedProgram.programName != "Custom") {
      return <Text style={styles.startBtnText}>Start Program</Text>;
    }
    if (
      selectedProgram.programName == "Custom" &&
      this.state.customPrograms.length == 0
    ) {
      return <Text style={styles.startBtnText}>Save & Customize Heaters</Text>;
    }
  }

  displayProgramDetails(selectedProgram) {
    if (selectedProgram && selectedProgram.programName != "Custom") {
      return <SelectedProgram data={selectedProgram}></SelectedProgram>;
    }
    if (
      selectedProgram.programName == "Custom" &&
      this.state.customPrograms.length == 0
    ) {
      return (
        <View
          style={{
            flex: 1,
            padding: "10%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#9A503B" }}>
            Add Custom Program
          </Text>
          <Text style={{ color: "#9A503B" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <TextInput
            placeholderTextColor={"orange"}
            onChangeText={(text) =>
              this.setState({ programNameEditText: text })
            }
            value={this.state.programNameEditText}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: 50,
              fontSize: 20,
              marginTop: 15,
            }}
            textAlign={"center"}
            placeholder="Enter Program Name"
          />
          <TextInput
            placeholderTextColor={"orange"}
            onChangeText={(text) =>
              this.setState({ sessionLengthEditText: text })
            }
            keyboardType={"numeric"}
            value={this.state.sessionLengthEditText}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: 50,
              fontSize: 20,
            }}
            textAlign={"center"}
            placeholder="Session Length (Min.)"
          />
        </View>
      );
    }
    if (
      selectedProgram.programName == "Custom" &&
      this.state.customPrograms.length != 0
    ) {
      return (
        <ScrollView
          style={{
            flex: 1,
            padding: "5%",
            alignContent: "center",
          }}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {this.state.customPrograms.map((program, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: "40%",
                  margin: "5%",
                  minHeight: 100,
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Icon name={"settings"} size={50} color={"#9A503B"}></Icon>
                <Text style={{ color: "#9A503B" }}>{program.programName}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      );
    }
  }
}
