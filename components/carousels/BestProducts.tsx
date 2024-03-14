/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { H4, H6 } from 'tamagui';

import HomeProductCart from '../carts/HomeProductCart';

import textStyles from '~/styles/texts';

interface Brand {
  id: number;
  brand: string;
  renderComponent: () => JSX.Element; // Function to render the component
}

const brands: Brand[] = [
  {
    id: 1,
    brand: 'Logitech',
    renderComponent: () => <HomeProductCart />,
  },
  {
    id: 2,
    brand: 'Razer',
    renderComponent: () => <HomeProductCart />,
  },
  {
    id: 3,
    brand: 'Asus',
    renderComponent: () => <HomeProductCart />,
  },
  {
    id: 4,
    brand: 'HyperX',
    renderComponent: () => <HomeProductCart />,
  },
  {
    id: 5,
    brand: 'PlayStation',
    renderComponent: () => <HomeProductCart />,
  },
  {
    id: 6,
    brand: 'Redragon',
    renderComponent: () => <HomeProductCart />,
  },
];

const PAGE_WIDTH = Dimensions.get('window').width;

const COUNT = 2;

function BestProducts() {
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH / COUNT,
    height: 210,
    style: {
      width: PAGE_WIDTH,
    },
  } as const;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <H4 style={[textStyles.blackHomeTitle]}>Best sellers</H4>
        <H6 style={[textStyles.LittleTitle, { color: '#3669C9' }]}>See all</H6>
      </View>

      <View
        style={{ height: 160, width: PAGE_WIDTH * 0.92, overflow: 'hidden', marginVertical: 7 }}>
        <Carousel
          {...baseOptions}
          loop
          autoPlay
          autoPlayInterval={2000}
          data={brands}
          renderItem={({ item }) => {
            const brand = item;
            return (
              <View
                key={brand.id}
                style={{
                  width: 150,
                  height: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                {brand.renderComponent()}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

export default BestProducts;
