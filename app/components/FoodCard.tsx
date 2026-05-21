import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

const FoodCard = ({ image }: any) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },

  image: {
    width: 150,
    height: 200,
    borderRadius: 25,
  },
});