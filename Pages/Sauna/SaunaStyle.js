import { StyleSheet } from "react-native";

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  headingContainer: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  programsHeading: {
    color: "#9A503B",
    fontSize: 25,
    fontFamily: "serif",
    letterSpacing: 0.5,
  },
  programOptions: {
    height: "15%",
  },
  programDetails: {
    flex: 1,
    // backgroundColor: "red",
  },
  startBtnContainer: {
    height: "25%",
    width: "100%",
    paddingHorizontal: "7%",
    justifyContent: "space-around",
  },
  startBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "#9A503B",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  addCustomProgramButton: {
    width: 50,
    height: 50,
    backgroundColor: "#9A503B",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  startBtnText: {
    color: "white",
    fontSize: 15,
  },
});
