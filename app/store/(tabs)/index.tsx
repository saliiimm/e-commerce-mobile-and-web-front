import React from 'react';
import { Dimensions, Image } from 'react-native';
import { YStack, Theme } from 'tamagui';

import TextCarousel from '~/components/carousels/TextCarousel';
import HomeProductCart from '~/components/carts/HomeProductCart';

const PAGE_WIDTH = Dimensions.get('window').width;

export default function TabOneScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="flex-start">
        <TextCarousel />
        <Image
          source={require('../../../assets/illustrations/ramadan.png')}
          style={{ width: PAGE_WIDTH, height: 200 }}
        />
        <HomeProductCart />
      </YStack>
    </Theme>
  );
}
