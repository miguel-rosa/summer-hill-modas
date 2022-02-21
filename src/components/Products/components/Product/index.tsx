import React, { FC, useContext } from "react";
import {View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CartContext } from "../../../../contexts/CartContext";
import { FontAwesome } from '@expo/vector-icons';

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
        <Text style={styles.buyButtonText}>
          <FontAwesome name="whatsapp" size={18}/> Comprar agora
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
    height: 210,
    minWidth: 150,
    borderRadius: 8
  },
  name:{
    fontSize: 14,
    fontFamily:"Montserrat_500",
    paddingVertical: 14,
    minHeight: 70
  },
  buyButton: {
    backgroundColor: "#1cea87",
    padding: 10,
    justifyContent:"center",
    alignItems: "center",
    borderRadius: 8
  },
  buyButtonText: {
    fontFamily:"Montserrat_500"
  }
})

export default Product;