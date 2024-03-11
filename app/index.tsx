/* eslint-disable prettier/prettier */
/* eslint-disable import/first */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */

import { router } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { YStack, H2, Theme, H5, Button } from 'tamagui';

import Storelogo from '../assets/logos/storelogo.svg';
import BrandsCarousel from '../components/carousels/BrandsCarousel';
import { enableLegacyWebImplementation } from 'react-native-gesture-handler';

enableLegacyWebImplementation(true);

import textStyles from '~/styles/texts';
const Page = () => {
  const handlePress = () => {
    router.navigate('/store'); // Navigate to 'Store' screen
  };

  return (
    <Theme name="light">
      <Head>
        <title>Salim Store</title>
      </Head>
      <YStack flex={1} alignItems="center" justifyContent="center" gap={40}>
        <Storelogo />
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <H2 style={textStyles.bigTitle}>Welcome to Salim Store</H2>
          <H5>Find the best tech products here!</H5>
        </View>

        <Button theme="active" style={styles.btn} onPress={handlePress}>
          Get started
        </Button>

        <BrandsCarousel />
      </YStack>
    </Theme>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Page;
