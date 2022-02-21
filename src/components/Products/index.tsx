import React, {FC, useContext} from "react";
import {View, FlatList, StyleSheet} from "react-native";
import { SearchContext } from "../../contexts/SearchContext";

import Product, { ProductProps } from "./components/Product";

type Product = ProductProps & {id:string};

type ProductsProps = {
  products: Product[];
};

const Products:FC<ProductsProps> = ({products}) => {
  
  const {search} = useContext(SearchContext);

  const renderItem = ({item}) => {
    return (
    <Product {...item}/>
  )}
  
  return (
    <View  style={styles.products}>
      <FlatList
        numColumns={2}
        data={products.filter(({name}) => name.toLowerCase().includes(search.toLocaleLowerCase()))}
        renderItem={renderItem}
        keyExtractor={product => product.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  products: {
    alignSelf: "stretch",
    backgroundColor: "#f3f3f3",
    justifyContent: "space-between",
    flex: 1
  }
})

export default Products;