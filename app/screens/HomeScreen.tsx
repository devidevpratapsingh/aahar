import React, {
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { CartContext } from '../context/CartContext';

const categories = [
  {
    id: 1,
    name: 'Pizza',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  },

  {
    id: 2,
    name: 'Burger',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },

  {
    id: 3,
    name: 'Biryani',
    image:
      'https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd',
  },

  {
    id: 4,
    name: 'Ice Cream',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
  },
];

const foods = [
  {
    id: 1,
    name: 'Chicken Fry',
    price: '₹250',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19',
  },

  {
    id: 2,
    name: 'Cheese Pizza',
    price: '₹399',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  },

  {
    id: 3,
    name: 'Special Burger',
    price: '₹199',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },

  {
    id: 4,
    name: 'Biryani',
    price: '₹299',
    image:
      'https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd',
  },
];

const HomeScreen = ({ navigation }: any) => {

  const { addToCart } =
    useContext(CartContext);

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}

      <View style={styles.header}>

        <View style={styles.locationContainer}>

          {/* LOGO */}

          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />

          <View>

            <Text style={styles.smallText}>
              Deliver To
            </Text>

            <Text style={styles.location}>
              Ranchi ,Jharkhand
            </Text>

          </View>

        </View>

        {/* CART ICON */}
<TouchableOpacity
  onPress={() =>
    navigation.navigate('Cart')
  }
>

          <Ionicons
            name="cart"
            size={35}
            color="#7d6666"
          />

        </TouchableOpacity>

      </View>

      {/* BANNER */}

      <View style={styles.banner}>

        <View>

          <Text style={styles.bannerTitle}>
            Fast Delivery
          </Text>

          <Text style={styles.bannerSub}>
            Delicious food at your door
          </Text>

          <TouchableOpacity
            style={styles.orderButton}
          >

            <Text style={styles.orderText}>
              Order Now
            </Text>

          </TouchableOpacity>

        </View>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
          }}
          style={styles.bannerImage}
        />

      </View>

      {/* CATEGORY */}

      <Text style={styles.sectionTitle}>
        Categories
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (

          <View style={styles.categoryCard}>

            <Image
              source={{ uri: item.image }}
              style={styles.categoryImage}
            />

            <Text style={styles.categoryText}>
              {item.name}
            </Text>

          </View>

        )}
      />

      {/* POPULAR */}

      <Text style={styles.sectionTitle}>
        Popular Food
      </Text>

      <View style={styles.foodContainer}>

        {foods.map((item) => (

          <View
            key={item.id}
            style={styles.foodCard}
          >

            <Image
              source={{ uri: item.image }}
              style={styles.foodImage}
            />

            <View style={styles.foodInfo}>

              <Text style={styles.foodName}>
                {item.name}
              </Text>

              <Text style={styles.foodPrice}>
                {item.price}
              </Text>

              {/* ADD TO CART */}

              <TouchableOpacity
                style={styles.cartButton}
                onPress={() => {

                  addToCart(item);

                  navigation
                    .getParent()
                    ?.navigate('Cart');
                }}
              >

                <Text style={styles.cartText}>
                  Add To Cart
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        ))}

      </View>

    </ScrollView>

  );
};

export default HomeScreen;

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

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 12,
  },

  smallText: {
    color: '#555',
    fontSize: 16,
  },

  location: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  banner: {
    backgroundColor: '#7d6666',
    borderRadius: 30,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  bannerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  bannerSub: {
    color: '#fff',
    width: 140,
    marginBottom: 15,
  },

  orderButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  },

  orderText: {
    color: '#7d6666',
    fontWeight: 'bold',
  },

  bannerImage: {
    width: 130,
    height: 130,
    borderRadius: 25,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  categoryCard: {
    alignItems: 'center',
    marginRight: 20,
  },

  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  categoryText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
  },

  foodContainer: {
    marginBottom: 120,
  },

  foodCard: {
    backgroundColor: '#e5d3b3',
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 25,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
  },

  foodImage: {
    width: '100%',
    height: 220,
  },

  foodInfo: {
    padding: 15,
  },

  foodName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  foodPrice: {
    fontSize: 22,
    color: '#7d6666',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  cartButton: {
    backgroundColor: '#7d6666',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});