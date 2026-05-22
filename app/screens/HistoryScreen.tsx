import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const HistoryScreen = ({ navigation }: any) => {

  const orders = [

    {
      id: 1,
      food: 'Chicken Fry',
      price: '₹250',
      image:
        'https://images.unsplash.com/photo-1512058564366-18510be2db19',
      date: '22 May 2026',
    },

    {
      id: 2,
      food: 'Cheese Pizza',
      price: '₹399',
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      date: '20 May 2026',
    },

    {
      id: 3,
      food: 'Biryani',
      price: '₹299',
      image:
        'https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd',
      date: '18 May 2026',
    },

    {
      id: 4,
      food: 'Burger',
      price: '₹199',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
      date: '15 May 2026',
    },

  ];

  return (

    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}

      <View style={styles.header}>

        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.heading}>
          Order History
        </Text>

      </View>

      {/* ORDERS */}

      {orders.map((item) => (

        <View
          key={item.id}
          style={styles.card}
        >

          {/* IMAGE */}

          <Image
            source={{
              uri: item.image,
            }}
            style={styles.foodImage}
          />

          {/* DETAILS */}

          <View style={styles.infoContainer}>

            <Text style={styles.food}>
              {item.food}
            </Text>

            <Text style={styles.date}>
              Ordered on {item.date}
            </Text>

            <Text style={styles.price}>
              {item.price}
            </Text>

          </View>

          {/* ICON */}

          <Ionicons
            name="checkmark-circle"
            size={35}
            color="green"
          />

        </View>

      ))}

      {/* BUTTON */}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Profile')
        }
      >

        <Text style={styles.buttonText}>
          Back
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#d2b48c',
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 140,
  },

  header: {
    alignItems: 'center',
    marginBottom: 35,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  heading: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#7d6666',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
    marginBottom: 20,

    flexDirection: 'row',
    alignItems: 'center',

    elevation: 6,
  },

  foodImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },

  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },

  food: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f2323',
  },

  date: {
    fontSize: 15,
    color: 'gray',
    marginTop: 8,
  },

  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7d6666',
    marginTop: 10,
  },

  button: {
    width: '80%',
    height: 60,

    backgroundColor: '#7d6666',

    borderRadius: 35,

    justifyContent: 'center',
    alignItems: 'center',

    alignSelf: 'center',

    marginTop: 20,
    marginBottom: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

});