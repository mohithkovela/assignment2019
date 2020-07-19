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
      selectedProgramIndex: 0,
      customPrograms: [],
      programNameEditText: "",
      sessionLengthEditText: "",
      addCustomProgram: false,
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
            nearTemp: 60,
            midTemp: 60,
            farTemp: 70,
            sessionTime: this.state.sessionLengthEditText,
            icon: "settings",
          },
        ],
        programNameEditText: "",
        sessionLengthEditText: "",
        selectedCustomProgram: false,
        editCustomMode: false,
      });
    }
  };

  componentDidMount() {
    this.setState({ selectedProgram: this.state.programs[0] });
  }

  changeActiveProgram(selectedProgramIndex) {
    this.setState({
      selectedProgramIndex: selectedProgramIndex,
      selectedProgram: this.state.programs[selectedProgramIndex],
      selectedCustomProgram: false,
      editCustomMode: false,
    });
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
                      programIndex: index,
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
          <View style={styles.startBtnContainer}>{this.getStartButton()}</View>
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }

  getStartButton() {
    if (
      this.state.selectedProgramIndex == 6 &&
      this.state.customPrograms.length != 0 &&
      !this.state.selectedCustomProgram &&
      !this.state.editCustomMode
    ) {
      return (
        <TouchableOpacity
          style={styles.addCustomProgramButton}
          onPress={() => this.setAddCustomProgramMode()}
        >
          {this.getStartButtonText(this.state.selectedProgram)}
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => this.startProgram()}
      >
        {this.getStartButtonText(this.state.selectedProgram)}
      </TouchableOpacity>
    );
  }

  setAddCustomProgramMode = () => {
    this.setState({ editCustomMode: true });
  };

  getStartButtonText(selectedProgram) {
    if (selectedProgram && selectedProgram.programName != "Custom") {
      return <Text style={styles.startBtnText}>Start Program</Text>;
    }
    if (
      (this.state.selectedProgramIndex == 6 &&
        this.state.customPrograms.length == 0) ||
      this.state.editCustomMode
    ) {
      return <Text style={styles.startBtnText}>Save & Customize Heaters</Text>;
    }
    return <Text style={styles.startBtnText}>+</Text>;
  }

  displayProgramDetails(selectedProgram) {
    if (
      (this.state.selectedProgramIndex == 6 &&
        this.state.customPrograms.length == 0) ||
      this.state.editCustomMode
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
    } else if (
      this.state.selectedProgramIndex == 6 &&
      this.state.customPrograms.length != 0 &&
      !this.state.selectedCustomProgram
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
                onPress={() => {
                  this.setState({
                    selectedProgram: program,
                    selectedCustomProgram: true,
                  });
                }}
              >
                <Icon name={"settings"} size={50} color={"#9A503B"}></Icon>
                <Text style={{ color: "#9A503B" }}>{program.programName}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      );
    } else {
      if (selectedProgram) {
        return <SelectedProgram data={selectedProgram}></SelectedProgram>;
      }
    }
  }
}
