import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import data from "./data.json";
import Header from "./src/components/Header";
import Products from "./src/components/Products";
import Cart from "./src/components/Cart";
import { CartStorage } from './src/contexts/CartContext';
import { SearchStorage } from './src/contexts/SearchContext';

export default function App() {
  return (
    <View style={styles.container}>
      <CartStorage>
        <SearchStorage>
        <Header name={data.name}/>
        <Products products={data.products} />
        <Cart/>
        </SearchStorage>
      </CartStorage>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
