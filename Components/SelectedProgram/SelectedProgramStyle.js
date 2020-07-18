import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: "10%",
  },
  pageText: {
    color: "#9A503B",
  },
  programName: { fontWeight: "bold", fontSize: 25 },
  programDetails: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
  },
  heaterConfiguration: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  heaterCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  heaterText: { fontSize: 11, color: "#9A503B" },
  programTimeContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  ProgramTime: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
