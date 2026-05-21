import React, {
  createContext,
  useState,
} from 'react';

export const CartContext = createContext<any>(
  null
);

export const CartProvider = ({
  children,
}: any) => {
  const [cartItems, setCartItems] = useState(
    []
  );

  const addToCart = (item: any) => {
    setCartItems((prev: any) => [
      ...prev,
      item,
    ]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};