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
    };
  }

  startProgram = () => {
    alert("program has been started");
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
          <Text style={{color: "#9A503B"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <TextInput
            placeholderTextColor={"orange"}
            // onChangeText={(text) => this.setState({ instance: text })}
            // value={this.state.instance}
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
            // onChangeText={(text) => this.setState({ instance: text })}
            // value={this.state.instance}
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
  }
}
