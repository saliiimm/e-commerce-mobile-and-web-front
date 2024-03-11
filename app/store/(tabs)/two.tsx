/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, View, Image, Text } from 'react-native';
import { YStack, Theme } from 'tamagui';

import Asus from '../../../assets/logos/brands/asus-logo.svg';
import HyperX from '../../../assets/logos/brands/hyperx-logo-lg.svg';
import PlayStation from '../../../assets/logos/brands/playstation-6.svg';
import Redragon from '../../../assets/logos/brands/redragon.svg';

import textStyles from '~/styles/texts';

interface Brand {
  id: number;
  brand: string;
  renderComponent: () => JSX.Element;
}

const brands: Brand[] = [
  {
    id: 1,
    brand: 'Mouse',
    renderComponent: () => (
      <Image
        source={require('../../../assets/logos/categories/mouse.png')}
        style={{ width: 190, height: 190 }}
      />
    ),
  },
  {
    id: 2,
    brand: 'KeyBoard',
    renderComponent: () => (
      <Image
        source={require('../../../assets/logos/categories/keyboard.png')}
        style={{ width: 190, height: 190 }}
      />
    ),
  },
  {
    id: 3,
    brand: 'EarBuds and Headphones',
    renderComponent: () => <Asus />,
  },
  {
    id: 4,
    brand: 'Mousepads',
    renderComponent: () => <HyperX />,
  },
  {
    id: 5,
    brand: 'Controllers',
    renderComponent: () => <PlayStation />,
  },
  {
    id: 6,
    brand: 'Microphones and Webcams',
    renderComponent: () => <Redragon />,
  },
  {
    id: 7,
    brand: 'Portable Computers',
    renderComponent: () => <Redragon />,
  },
  {
    id: 8,
    brand: 'Desktop Config',
    renderComponent: () => <Redragon />,
  },
];
export default function TabTwoScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <View style={styles.app}>
          <FlatList
            data={brands}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  {item.renderComponent()}
                  <Text style={textStyles.blackMidTitle}>{item.brand}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.brand}
          />
        </View>
      </YStack>
    </Theme>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 4,
    marginHorizontal: 'auto',
    width: '100%',
  },
  item: {
    flex: 1,
    maxWidth: '50%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
});
