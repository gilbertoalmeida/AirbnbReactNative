import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
    justifyContent: "center"
  },
  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b"
  },
  description: {
    fontSize: 24,
    lineHeight: 28
  },
  prices: {
    fontSize: 18,
    marginVertical: 10
  },
  oldPrice: {
    color: "#5b5b5b",
    fontWeight: "bold",
    textDecorationLine: "line-through"
  },
  newPrice: {
    fontWeight: "bold"
  },
  totalPrice: {
    fontSize: 18,
    color: "#5b5b5b",
    textDecorationLine: "underline"
  },
})

export default styles