import React, {FC, useContext} from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from "../../../../contexts/CartContext";
import { Feather } from '@expo/vector-icons';

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
        <Feather name="trash-2" color="black" size={18}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    flexDirection: "row",
    marginBottom:10
  },
  image:{
    width:70,
    height:70,
    borderRadius:8
  },
  name:{
    fontSize: 14,
    marginLeft: 20,
    maxWidth:250,
    fontFamily:"Montserrat_500"
  },
  remove: {
    right: 0,
    position: "absolute",
    alignSelf:"center"
  }
});

export default Item;