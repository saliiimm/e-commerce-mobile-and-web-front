/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import Asus from '../../assets/logos/brands/asus-logo.svg';
import HyperX from '../../assets/logos/brands/hyperx-logo-lg.svg';
import Logitech from '../../assets/logos/brands/logitech.svg';
import PlayStation from '../../assets/logos/brands/playstation-6.svg';
import Razer from '../../assets/logos/brands/razer.svg';
import Redragon from '../../assets/logos/brands/redragon.svg';

interface Brand {
  id: number;
  brand: string;
  renderComponent: () => JSX.Element; // Function to render the component
}

const brands: Brand[] = [
  {
    id: 1,
    brand: 'Logitech',
    renderComponent: () => <Logitech />,
  },
  {
    id: 2,
    brand: 'Razer',
    renderComponent: () => <Razer />,
  },
  {
    id: 3,
    brand: 'Asus',
    renderComponent: () => <Asus />,
  },
  {
    id: 4,
    brand: 'HyperX',
    renderComponent: () => <HyperX />,
  },
  {
    id: 5,
    brand: 'PlayStation',
    renderComponent: () => <PlayStation />,
  },
  {
    id: 6,
    brand: 'Redragon',
    renderComponent: () => <Redragon />,
  },
];

const PAGE_WIDTH = Dimensions.get('window').width;

const COUNT = 3;

function BrandsCarousel() {
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH / COUNT,
    height: PAGE_WIDTH / 2,
    style: {
      width: PAGE_WIDTH,
    },
  } as const;

  return (
    <View style={{ height: 210, width: PAGE_WIDTH }}>
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
                width: PAGE_WIDTH / 3,
                height: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {brand.renderComponent()}
            </View>
          );
        }}
      />
    </View>
  );
}

export default BrandsCarousel;
