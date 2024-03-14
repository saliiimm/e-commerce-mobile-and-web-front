/* eslint-disable prettier/prettier */
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { H2, H5, XStack } from 'tamagui';

import textStyles from '~/styles/texts';

interface ProductAdProps {
  backgroundColor?: string; // Optional background color
  imageSource: string; // Required image source (URL or path)
  productName: string; // Required product name
}

const ProductAd: React.FC<ProductAdProps> = ({
  backgroundColor = '#3669C9',
  imageSource,
  productName,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.textView}>
        <H2 style={textStyles.AdCartTitle}>{productName}</H2>
        <XStack alignItems="center" justifyContent="center">
          <H5 style={textStyles.AdCartSubTitle}>Shop now</H5>
          <Feather name="arrow-right" size={25} color="white" />
        </XStack>
      </View>
      <View>
        <Image
          source={{ uri: imageSource }}
          style={{ width: 160, height: 160, resizeMode: 'contain' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 10,
    padding: 20,
    paddingVertical: 30,
    width: '55%',
  },
});

export default ProductAd;
