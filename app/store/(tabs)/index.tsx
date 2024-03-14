import React from 'react';
import { YStack, Theme, ScrollView } from 'tamagui';

import HomeIllustration from '~/components/HomeIllustration';
import BestProducts from '~/components/carousels/BestProducts';
import NewArrivals from '~/components/carousels/NewArrivals';
import TextCarousel from '~/components/carousels/TextCarousel';
import ProductAd from '~/components/carts/ProductAd';
import SearchBar from '~/components/search/SearchBar';

export default function TabOneScreen() {
  return (
    <Theme name="light">
      <ScrollView>
        <YStack flex={1} alignItems="flex-start" justifyContent="flex-start" paddingHorizontal={15}>
          <TextCarousel />
          <SearchBar />
          <HomeIllustration imageSource="https://res.cloudinary.com/dumhhj9qh/image/upload/v1710416034/samples/ads/nst9ddf7xgn0eednopq1.png" />
          <BestProducts />
          <ProductAd
            productName="Razer Kraken"
            imageSource="https://res.cloudinary.com/dumhhj9qh/image/upload/v1710414287/samples/ads/pcehmahy2xxbsbvycxi9.png"
          />
          <NewArrivals />
          <ProductAd
            backgroundColor="#0ACF83"
            productName="Bose Qc50"
            imageSource="https://res.cloudinary.com/dumhhj9qh/image/upload/v1710414287/samples/ads/pcehmahy2xxbsbvycxi9.png"
          />
        </YStack>
      </ScrollView>
    </Theme>
  );
}
