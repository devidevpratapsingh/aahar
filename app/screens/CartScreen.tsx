import React, {
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { CartContext } from '../context/CartContext';


const CartScreen = () => {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext);

  // TOTAL PRICE

  const totalPrice =
    cartItems.reduce(
      (total: number, item: any) => {

        return (
          total +
          parseInt(
            item.price.replace('₹', '')
          ) *
            item.quantity
        );
      },
      0
    );

  // CHECKOUT

const handleCheckout = () => {

  Alert.alert(
    'Success',
    'Order Placed Successfully',
    [
      {
        text: 'OK',

        onPress: () => {
          clearCart();
        },
      },
    ]
  );
};

  return (

    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <Text style={styles.heading}>
          My Cart
        </Text>

        <Ionicons
          name="cart"
          size={35}
          color="#7d6666"
        />

      </View>

      {/* EMPTY CART */}

      {cartItems.length === 0 ? (

        <View style={styles.emptyContainer}>

          <Ionicons
            name="cart-outline"
            size={100}
            color="#7d6666"
          />

          <Text style={styles.emptyText}>
            Your Cart Is Empty
          </Text>

        </View>

      ) : (

        <>
          {/* CART LIST */}

          <FlatList
            data={cartItems}
            keyExtractor={(
              item,
              index
            ) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (

              <View style={styles.card}>

                {/* IMAGE */}

                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.image}
                />

                {/* INFO */}

                <View style={styles.info}>

                  <Text style={styles.name}>
                    {item.name}
                  </Text>

                  <Text style={styles.price}>
                    {item.price}
                  </Text>

                  {/* QUANTITY */}

                  <View
                    style={
                      styles.quantityContainer
                    }
                  >

                    {/* MINUS */}

                    <TouchableOpacity
                      style={styles.qtyButton}
                      onPress={() =>
                        decreaseQuantity(
                          item.id
                        )
                      }
                    >

                      <Text
                        style={styles.qtyText}
                      >
                        -
                      </Text>

                    </TouchableOpacity>

                    {/* QUANTITY */}

                    <Text
                      style={styles.quantity}
                    >
                      {item.quantity}
                    </Text>

                    {/* PLUS */}

                    <TouchableOpacity
                      style={styles.qtyButton}
                      onPress={() =>
                        increaseQuantity(
                          item.id
                        )
                      }
                    >

                      <Text
                        style={styles.qtyText}
                      >
                        +
                      </Text>

                    </TouchableOpacity>

                  </View>

                </View>

                {/* DELETE */}

                <TouchableOpacity
                  onPress={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                >

                  <Ionicons
                    name="trash"
                    size={28}
                    color="red"
                  />

                </TouchableOpacity>

              </View>

            )}
          />

          {/* BOTTOM */}

          <View
            style={styles.bottomContainer}
          >

            <View>

              <Text style={styles.totalText}>
                Total Price
              </Text>

              <Text style={styles.totalPrice}>
                ₹{totalPrice}
              </Text>

            </View>

            {/* CHECKOUT */}

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}
            >

              <Text
                style={styles.checkoutText}
              >
                Checkout
              </Text>

            </TouchableOpacity>

          </View>

        </>

      )}

    </View>

  );
};

export default CartScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#d2b48c',
    paddingTop: 60,
    paddingHorizontal: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#3d2d2d',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#7d6666',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 18,
    color: '#7d6666',
    marginVertical: 10,
    fontWeight: 'bold',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  qtyButton: {
    width: 35,
    height: 35,
    backgroundColor: '#7d6666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },

  qtyText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  quantity: {
    fontSize: 22,
    marginHorizontal: 15,
    fontWeight: 'bold',
  },

  bottomContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 30,
    marginBottom: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalText: {
    fontSize: 18,
    color: 'gray',
  },

  totalPrice: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7d6666',
  },

  checkoutButton: {
    backgroundColor: '#7d6666',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },

  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});