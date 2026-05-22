import React, {
  useState,
  useContext,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { CartContext } from '../context/CartContext';

const width = Dimensions.get('window').width;

const foods = [
  {
    id: 1,
    name: 'Pizza',
    category: 'Fast Food',
    price: '₹399',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591',
  },

  {
    id: 2,
    name: 'Burger',
    category: 'Fast Food',
    price: '₹199',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  },

  {
    id: 3,
    name: 'Ice Cream',
    category: 'Dessert',
    price: '₹149',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
  },

  {
    id: 4,
    name: 'Biryani',
    category: 'Indian',
    price: '₹299',
    image:
      'https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd',
  },

  {
    id: 5,
    name: 'Pasta',
    category: 'Italian',
    price: '₹349',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9',
  },

  {
    id: 6,
    name: 'Paneer',
    category: 'Indian',
    price: '₹259',
    image:
      'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8',
  },

  {
    id: 7,
    name: 'Chicken Fry',
    category: 'Non Veg',
    price: '₹449',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19',
  },

  {
    id: 8,
    name: 'Cold Drink',
    category: 'Drinks',
    price: '₹99',
    image:
      'https://images.unsplash.com/photo-1629203851122-3726ecdf080e',
  },
];

const filters = [
  'All',
  'Indian',
  'Fast Food',
  'Dessert',
  'Italian',
  'Drinks',
];

const SearchScreen = ({ navigation }: any) => {

  const [search, setSearch] = useState('');

  const [selectedFilter, setSelectedFilter] =
    useState('All');

  const { addToCart } =
    useContext(CartContext);

  const filteredFoods = foods.filter((item) => {

    const matchesSearch =
      item.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      selectedFilter === 'All' ||
      item.category === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* HEADER */}

      <View style={styles.header}>

        <View style={styles.leftHeader}>

          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />

          <Text style={styles.heading}>
            Search Food
          </Text>

        </View>

        <Ionicons
          name="search"
          size={30}
          color="#7d6666"
        />

      </View>

      {/* SEARCH */}

      <View style={styles.searchBox}>

        <Ionicons
          name="search"
          size={22}
          color="gray"
        />

        <TextInput
          placeholder="Search food..."
          placeholderTextColor="gray"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />

      </View>

      {/* FILTERS */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >

        {filters.map((item, index) => (

          <TouchableOpacity
            key={index}
            style={[
              styles.filterButton,

              selectedFilter === item &&
                styles.activeFilter,
            ]}
            onPress={() =>
              setSelectedFilter(item)
            }
          >

            <Text
              style={[
                styles.filterText,

                selectedFilter === item &&
                  styles.activeFilterText,
              ]}
            >
              {item}
            </Text>

          </TouchableOpacity>

        ))}

      </ScrollView>

      {/* GRID */}

      <View style={styles.gridContainer}>

        {/* LEFT */}

        <View style={styles.column}>

          {filteredFoods
            .filter((_, index) => index % 2 === 0)
            .map((item) => (

              <View
                key={item.id}
                style={styles.card}
              >

                <Image
                  source={{ uri: item.image }}
                  style={[
                    styles.image,
                    {
                      height:
                        item.id % 3 === 0
                          ? 280
                          : 190,
                    },
                  ]}
                />

                <View style={styles.overlay}>

                  <Text style={styles.foodName}>
                    {item.name}
                  </Text>

                  <Text style={styles.price}>
                    {item.price}
                  </Text>

                  <TouchableOpacity
              style={styles.addButton}
              onPress={() => {

                addToCart(item);

                navigation.navigate('Cart');

              }}
            >

                    <Text style={styles.addText}>
                      Add To Cart
                    </Text>

                  </TouchableOpacity>

                </View>

              </View>

            ))}

        </View>

        {/* RIGHT */}

        <View style={styles.column}>

          {filteredFoods
            .filter((_, index) => index % 2 !== 0)
            .map((item) => (

              <View
                key={item.id}
                style={styles.card}
              >

                <Image
                  source={{ uri: item.image }}
                  style={[
                    styles.image,
                    {
                      height:
                        item.id % 2 === 0
                          ? 240
                          : 170,
                    },
                  ]}
                />

                <View style={styles.overlay}>

                  <Text style={styles.foodName}>
                    {item.name}
                  </Text>

                  <Text style={styles.price}>
                    {item.price}
                  </Text>

                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {

                      addToCart(item);

                      navigation
                        .getParent()
                        ?.navigate('Cart');
                    }}
                  >

                    <Text style={styles.addText}>
                      Add To Cart
                    </Text>

                  </TouchableOpacity>

                </View>

              </View>

            ))}

        </View>

      </View>

    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#d2b48c',
    paddingTop: 60,
    paddingHorizontal: 12,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 75,
    height: 75,
    
    marginRight: 12,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#564545',
  },

  searchBox: {
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },

  filterContainer: {
    marginBottom: 25,
  },

  filterButton: {
    backgroundColor: '#e5d3b3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 12,
    height: 45,
  },

  activeFilter: {
    backgroundColor: '#7d6666',
  },

  filterText: {
    color: '#333',
    fontWeight: '600',
  },

  activeFilterText: {
    color: '#fff',
  },

  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 120,
  },

  column: {
    width: width * 0.45,
  },

  card: {
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',

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
    width: '100%',
  },

  overlay: {
    padding: 12,
  },

  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  price: {
    fontSize: 18,
    color: '#7d6666',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: '#7d6666',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },

  addText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});