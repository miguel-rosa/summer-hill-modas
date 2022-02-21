import React, { FC, useContext } from "react";
import {View, FlatList, StyleSheet, TouchableOpacity, Text, Linking} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import { CartContext } from "../../contexts/CartContext";
import Item from "./components/Item";

type CartProps = {
  products,
  name: string;
  whatsappNumber: string
};

const Cart:FC<CartProps> = ({name, whatsappNumber}) => {
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
      <TouchableOpacity
        style={styles.finishPurchase}
        onPress={() => Linking.openURL(`https://wa.me/${whatsappNumber}/?text=Olá, *${name}*, eu gostaria de comprar os seguintes produtos: ${cartItems.map(({name}) => name).join(", ")}. Muito obrigado!`)}
      >
        <Text style={styles.finishPurchaseText}><FontAwesome name="whatsapp" size={18}/> Comprar agora</Text>
      </TouchableOpacity>
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
    height: 420,
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
    fontSize:16,
    paddingVertical:10,
    fontFamily:"Montserrat_500"
  },
  close: {
    position: "absolute",
    right:10,
  },
  closeText: {
    fontSize:28
  },
  items: {
    padding: 10,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
  },
  finishPurchase: {
    backgroundColor: "#1cea87",
    padding: 10,
    margin:20,
    justifyContent:"center",
    alignItems: "center",
    borderRadius: 8
  },
  finishPurchaseText:{
    fontFamily:"Montserrat_500",
  }
})

export default Cart;