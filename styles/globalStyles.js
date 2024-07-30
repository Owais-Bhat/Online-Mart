// styles/globalStyles.js
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: width * 0.05, // 5% of screen width
    backgroundColor: "transparent",
  },
  title: {
    fontSize: height * 0.03, // 3% of screen height
    marginBottom: height * 0.02, // 2% of screen height
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: height * 0.01, // 1% of screen height
    marginVertical: height * 0.01, // 1% of screen height
    backgroundColor: "#5CE1E6",
    borderRadius: 10,
    color: "black",
  },
  errorText: {
    color: "red",
  },
  image: {
    height: height * 0.3, // 20% of screen height
    width: width * 0.5, // 20% of screen width
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    flexDirection: "row",
    gap: width * 0.05, // 5% of screen width
    justifyContent: "center",
    alignItems: "center",
    paddingTop: height * 0.01, // 1% of screen height
  },
  pressText: {
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: "#5CE1E6",
    borderColor: "#B6C7AA",
    padding: height * 0.01, // 1% of screen height
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.15, // 15% of screen height
    width: "100%",
    backgroundColor: "transparent",
    paddingHorizontal: width * 0.05, // 5% of screen width
    paddingTop: height * 0.02, // 4% of screen height
  },
  logo: {
    width: width * 0.45, // 25% of screen width
    height: height * 0.2, // 10% of screen height
  },
  menu: {
    fontSize: height * 0.02, // 2% of screen height
    color: "#000",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: height * 0.06, // 6% of screen height
    backgroundColor: "transparent",
    alignItems: "center",
  },
  icon: {
    fontSize: height * 0.02, // 2% of screen height
    color: "#000",
  },
});

export default globalStyles;
