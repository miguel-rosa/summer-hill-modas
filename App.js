
import React, {useState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { getFirestore, collection, query, getDocs, addDoc} from "firebase/firestore";

import Header from "./src/components/Header";
import Products from "./src/components/Products";
import Cart from "./src/components/Cart";
import { CartStorage } from './src/contexts/CartContext';
import { SearchStorage } from './src/contexts/SearchContext';
import { Montserrat_500Medium, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { app }  from "./data/firebase";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);
const db = getFirestore(app);
const queryProducts = query(collection(db, "products"));
const queryStore = query(collection(db, "store"));

export default function App() {
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState({});
  
  let [fontsLoaded] = useFonts({
    "Montserrat_500": Montserrat_500Medium,
    "Montserrat_700": Montserrat_700Bold
  });
  
  const getProducts = async () => {
    const querySnapshot = await getDocs(queryProducts);
    setProducts(querySnapshot.docs.map(doc => doc.data()))
    console.log("get")
  }

  const getStore = async () => {
    const querySnapshot = await getDocs(queryStore);
    setStore(querySnapshot.docs[0].data())
    console.log("get")
  }

  useEffect(() => {
    getProducts();
    getStore();
  }, [])
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <CartStorage>
        <SearchStorage>
        <Header name={store.name}/>
        <Products products={products} />
        <Cart {...store}/>
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
    fontFamily: "Montserrat_500"
  },
});
