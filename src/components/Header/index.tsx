import React, { FC, useContext } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { CartContext } from "../../contexts/CartContext";
import { SearchContext } from "../../contexts/SearchContext";

type HeaderProps = {
  name: string;
}

const Header:FC<HeaderProps> = ({name}) => {

  const {showCart} = useContext(CartContext);
  const {search, setSearch} = useContext(SearchContext);

  return (
    <View style={styles.header}>
      <View style={styles.topBar}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity onPress={showCart}>
          <Text>🛒</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textInputWrapper}>
      <Text>🔎</Text>
      <TextInput
          style={styles.textInput}
          onChangeText={text => setSearch(text)}
          value={search}
          placeholder=" Search for products"
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
  name: {
    fontSize:18,
    fontWeight:"700"
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
    fontSize: 18,
    paddingHorizontal:8
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