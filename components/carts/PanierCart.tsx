/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { MAIN_COLOR } from '~/config/colors';
import textStyles from '~/styles/texts';

const PanierCart = ({ initialQuantity = 1 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const isDisabled = quantity === 0;

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(0, quantity + delta);
    setQuantity(newQuantity);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logos/categories/mouse.png')}
        style={{ width: 90, height: 90, marginHorizontal: '5%' }}
      />
      <View style={styles.textContainer}>
        <Text style={textStyles.LittleTitle}>Logitech G305</Text>
        <Text style={textStyles.LittleDetail}>8500DA</Text>
        <Text style={[textStyles.Promo, styles.promo]}>-10%</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => handleQuantityChange(-1)}
          style={[styles.btn, isDisabled && styles.btnDisabled]}>
          <Text style={{ color: 'white', fontSize: 15 }}>-</Text>
        </TouchableOpacity>
        <Text style={[textStyles.LittleDetail, { marginHorizontal: 10 }]}>{quantity}</Text>
        <TouchableOpacity onPress={() => handleQuantityChange(1)} style={styles.btn}>
          <Text style={{ color: 'white', fontSize: 15 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: 100,
    padding: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  promo: {
    color: MAIN_COLOR,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  btn: {
    width: 30,
    height: 30,
    backgroundColor: MAIN_COLOR,
    color: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDisabled: {
    opacity: 0.5,
  },
});

export default PanierCart;
