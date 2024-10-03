"use client";
import { createContext, useState } from "react";

export let cartContext = createContext();

const CartContext = ({ children }) => {
  let [carts, setCarts] = useState([]);

  return (
    <cartContext.Provider value={{ carts, setCarts }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContext;
