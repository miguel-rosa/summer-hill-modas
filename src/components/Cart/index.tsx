import React, { FC, useContext } from "react";
import {View, FlatList, StyleSheet, TouchableOpacity, Text} from "react-native";


import { CartContext } from "../../contexts/CartContext";
import Item from "./components/Item";

type CartProps = {
  products
};

const Cart:FC<CartProps> = () => {
  const { hideCart, isCartVisible, cartItems } = useContext(CartContext);
  const renderItem = ({item}) => (
   <Item {...item}/>
  )

  return isCartVisible && (
    <View style={styles.cart}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Carrinho
        </Text>
        <TouchableOpacity style={styles.close} onPress={hideCart}>
          <Text style={styles.closeText}>
            &times;
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        style={styles.items}
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={product => product.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  cart: {
    bottom:0,
    borderColor: "#ebebeb",
    borderWidth:1,
    backgroundColor:"#fff",
    alignSelf: "stretch",
    height: 300,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    elevation:40,
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity:1,
    shadowOffset: {width: -10, height: -10},
  },
  header: {
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    
  },
  headerText: {
    fontSize:18,
    paddingVertical:10
  },
  close: {
    position: "absolute",
    right:10,
  },
  closeText: {
    fontSize:28
  },
  items: {
    padding: 10
  }
})

export default Cart;