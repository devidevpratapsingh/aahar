import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


const CartScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const price = 250;
  const total = quantity * price;

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>
        My Cart
      </Text>

      {/* CART ITEM */}

      <View style={styles.card}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1512058564366-18510be2db19',
          }}
          style={styles.image}
        />

        <View style={styles.details}>

          <Text style={styles.foodName}>
            Fried Chicken
          </Text>

          <Text style={styles.price}>
            ₹ {price}
          </Text>

          {/* QUANTITY */}

          <View style={styles.quantityContainer}>

            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
            >
              <Text style={styles.qtyText}>
                -
              </Text>
            </TouchableOpacity>

            <Text style={styles.quantity}>
              {quantity}
            </Text>

            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() =>
                setQuantity(quantity + 1)
              }
            >
              <Text style={styles.qtyText}>
                +
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

      {/* TOTAL */}

      <View style={styles.totalContainer}>

        <Text style={styles.totalText}>
          Total
        </Text>

        <Text style={styles.totalPrice}>
          ₹ {total}
        </Text>

      </View>

      {/* CHECKOUT BUTTON */}

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>
          Checkout
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2b48c',
    padding: 20,
    paddingTop: 60,
  },

  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#e5d3b3',
    borderRadius: 25,
    padding: 15,
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },

  details: {
    marginLeft: 15,
    justifyContent: 'space-between',
  },

  foodName: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 22,
    color: '#7d6666',
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
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  quantity: {
    fontSize: 24,
    marginHorizontal: 15,
  },

  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 10,
  },

  totalText: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  totalPrice: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7d6666',
  },

  checkoutButton: {
    backgroundColor: '#7d6666',
    height: 65,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  checkoutText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});