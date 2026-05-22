


import React, {
  createContext,
  useState,
} from 'react';

export const CartContext =
  createContext<any>(null);

export const CartProvider = ({
  children,
}: any) => {

  const [cartItems, setCartItems] =
    useState<any[]>([]);

  // ADD TO CART

  const addToCart = (item: any) => {

    const existingItem =
      cartItems.find(
        cartItem =>
          cartItem.id === item.id
      );

    if (existingItem) {

      setCartItems(
        cartItems.map(cartItem =>

          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1,
              }
            : cartItem
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...item,
          quantity: 1,
        },
      ]);

    }

  };

  // REMOVE ITEM

  const removeFromCart = (
    itemId: number
  ) => {

    setCartItems(
      cartItems.filter(
        item => item.id !== itemId
      )
    );

  };

  // INCREASE QUANTITY

  const increaseQuantity = (
    itemId: number
  ) => {

    setCartItems(
      cartItems.map(item =>

        item.id === itemId
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );

  };

  // DECREASE QUANTITY

  const decreaseQuantity = (
    itemId: number
  ) => {

    setCartItems(
      cartItems.map(item =>

        item.id === itemId &&
        item.quantity > 1
          ? {
              ...item,
              quantity:
                item.quantity - 1,
            }
          : item
      )
    );

  };

  // CLEAR CART

  const clearCart = () => {
    setCartItems([]);
  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >

      {children}

    </CartContext.Provider>

  );

};