import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center"
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 25,
    lineHeight: 77
  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    marginTop: 25,
    marginLeft: 25,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  searchButton: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 20,
    height: 60,
    marginHorizontal: 10,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    zIndex: 100
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold"
  },
})

export default styles