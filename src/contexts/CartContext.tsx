import React, { FC, createContext, useState, useEffect } from "react";

type CartItem = {
  id: string;
  name: string;
  image: string;
}

type CartContextType = {
  isCartVisible: boolean;
  cartItems: CartItem[];
  addItemToCart({item: CartItem, showCartWhenAdd:boolean}): void;
  showCart(): void;
  hideCart(): void;
  removeItemFromCart(productIdToRemove:string): void;

}

export const CartContext = createContext({} as CartContextType);

export const CartStorage:FC = ({children}) => {

  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const showCart = () => {
    setIsCartVisible(true)
  };

  const hideCart = () => {
    setIsCartVisible(false)
  }

  const addItemToCart = ({item, showCartWhenAdd=false}) => {
    if(showCartWhenAdd) setIsCartVisible(true);
    if(cartItems.find(({id}) => item.id === id)) return;
    setCartItems(previuosCartItems => [...previuosCartItems, item])
  }

  const removeItemFromCart = (productIdToRemove:string) => {
    setCartItems(previuosCartItems => previuosCartItems.filter(({id}) => id !== productIdToRemove))
  }

  return (
    <CartContext.Provider
      value={{
        isCartVisible,
        cartItems,
        showCart,
        hideCart,
        addItemToCart,
        removeItemFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}