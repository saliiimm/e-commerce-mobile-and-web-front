/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import textStyles from '~/styles/texts';

const HomeProductCart = () => {
  return (
    <View style={styles.container}>
      <Text style={[textStyles.Promo, styles.promo]}>-10%</Text>
      <Image
        source={require('../../assets/logos/categories/mouse.png')}
        style={{ width: 90, height: 90, marginHorizontal: '20%' }}
      />
      <View style={styles.textContainer}>
        <Text style={textStyles.LittleTitle}>Logitech G305</Text>
        <Text style={textStyles.LittleDetail}>8500DA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  promo: {
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: '#45ADA1',
    borderTopRightRadius: 5,
  },
});

export default HomeProductCart;
