import React from "react"
import {
  View,
  Text,
  Image
} from "react-native"
import styles from "./styles"
import Fontisto from "react-native-vector-icons/Fontisto"


const Post = (props) => {
  return (
    <View
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg" }}
      />
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum!
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>42€</Text>
        <Text style={styles.newPrice}> 37€ </Text>
        / night
      </Text>
      <Text style={styles.totalPrice}>148€ total</Text>


    </View >
  )
}

export default Post