import React, { FC, useContext } from "react";
import {View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CartContext } from "../../../../contexts/CartContext";

export type ProductProps = {
  id: string;
  name: string;
  image: string;
};

const Product:FC<ProductProps> = ({
  id,
  name,
  image
}) => {
  const { addItemToCart } = useContext(CartContext);

  return(
    <View style={styles.product}>
      <Image style={styles.image} source={{uri: image}}/>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity 
        style={styles.buyButton}
        onPress={() => addItemToCart({item:{id, name, image}, showCartWhenAdd:true})}
      >
        <Text>
          Comprar agora
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  product:{
    marginHorizontal: 10,
    marginVertical: 10,
    flex:1/2
  },
  image:{
    alignSelf: "stretch",
    height: 250,
    minWidth: 150,
    borderRadius: 8
  },
  name:{
    fontSize: 18,
    fontWeight: "700",
    paddingVertical: 8
  },
  buyButton: {
    backgroundColor: "#1cea87",
    padding: 10,
    justifyContent:"center",
    alignItems: "center",
    borderRadius: 8
  }
})

export default Product;