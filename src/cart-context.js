import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);
  const addToCart = () => {
    setItems((prev) => prev + 1);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
