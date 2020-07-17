import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import styles from "../Sauna/SaunaStyle";
import { Text, View, ScrollView } from "react-native";
import ProgramMenuItem from "../../Components/ProgramMenuItem/ProgramMenuItem";

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
          selected: true,
        },
        {
          programName: "Weight Loss",
          programDesc: "",
          nearTemp: 0,
          midTemp: 70,
          farTemp: 75,
          sessionTime: 45,
          icon: "minimize-2",
          selected: false,
        },
        {
          programName: "Relaxation",
          programDesc: "",
          nearTemp: 65,
          midTemp: 60,
          farTemp: 65,
          sessionTime: 40,
          icon: "smile",
          selected: false,
        },
        {
          programName: "Pain Relief",
          programDesc: "",
          nearTemp: 60,
          midTemp: 70,
          farTemp: 80,
          sessionTime: 50,
          icon: "minimize",
          selected: false,
        },
        {
          programName: "Anti Aging",
          programDesc: "",
          nearTemp: 0,
          midTemp: 65,
          farTemp: 70,
          sessionTime: 35,
          icon: "rewind",
          selected: false,
        },
        {
          programName: "Cardio",
          programDesc: "",
          nearTemp: 0,
          midTemp: 60,
          farTemp: 70,
          sessionTime: 43,
          icon: "heart",
          selected: false,
        },
      ],
    };
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
              console.log("calling Program menu item with data", program);
              return <ProgramMenuItem data={program} />;
            })}
            {/* <ProgramMenuItem data={this.state.programs[1]} /> */}
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}
