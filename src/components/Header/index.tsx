import React, { FC, useContext } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import { SearchContext } from "../../contexts/SearchContext";
import IconCart from "../Icons/IconCart";
import IconSearch from "../Icons/IconSearch";
import { Feather } from "@expo/vector-icons";

type HeaderProps = {
  name: string;
}

const Header:FC<HeaderProps> = ({name}) => {

  const {showCart, cartItems} = useContext(CartContext);
  const {search, setSearch} = useContext(SearchContext);

  return (
    <View style={styles.header}>
      <View style={styles.topBar}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity onPress={showCart}>
          {cartItems.length > 0 ? <Text style={styles.cartQuantity}>{cartItems.length}</Text> : null}
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.textInputWrapper}>
      <Feather name="search" size={24} color="black"/>
      <TextInput
          style={styles.textInput}
          onChangeText={text => setSearch(text)}
          value={search}
          placeholder="O que você quer comprar?"
      />
      { search ?
        <TouchableOpacity style={styles.clean} onPress={() => setSearch("")}>
          <Text style={styles.cleanText}>&times;</Text>
        </TouchableOpacity>
        : null
      }
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    top:0,
    alignSelf: "stretch",
    padding:18,
    paddingHorizontal: 18,
    paddingTop: 40,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1
  },
  topBar: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginVertical:10
  },
  cartQuantity: {
    width:16,
    height:16,
    zIndex:2,
    position: "absolute",
    right:-10,
    top:-10,
    textAlign:"center",
    backgroundColor: "#1cea87",
    borderRadius: 50,
    color: "black",
    fontFamily: "Montserrat_500",
    fontSize:10
  },
  name: {
    fontSize:18,
    fontFamily:"Montserrat_700"
  },
  textInputWrapper: {
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    alignItems:"center",
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius:8
  },
  textInput: {
    fontSize: 16,
    alignSelf: "stretch",
    flex:1,
    paddingHorizontal:8,
    fontFamily:"Montserrat_500"
  },
  clean: {
    position:"absolute",
    right:10
  },
  cleanText:{
    fontSize:28
  }
})

export default Header;