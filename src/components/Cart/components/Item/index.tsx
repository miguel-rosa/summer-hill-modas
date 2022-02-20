import React, {FC, useContext} from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from "../../../../contexts/CartContext";

type ItemProps = {
  id: string,
  image: string,
  name: string
}

const Item:FC<ItemProps> = ({
  id,
  image,
  name
}) => {

  const { removeItemFromCart } = useContext(CartContext);

  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri:image}}/>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.remove}onPress={() => removeItemFromCart(id)}>
        <Text style={styles.removeText}>&times;</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    flexDirection: "row",
    alignSelf: "stretch",
    flex:1,
    marginBottom:10
  },
  image:{
    width:70,
    height:70,
    borderRadius:8
  },
  name:{
    fontSize: 18,
    marginLeft: 20
  },
  remove: {
    right: 0,
    position: "absolute",
    alignSelf:"center"
  },
  removeText: {
    fontSize: 28
  }
});

export default Item;