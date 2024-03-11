/* eslint-disable prettier/prettier */
import React from 'react';
import { YStack, H2, Separator, Theme } from 'tamagui';

import EditScreenInfo from '../../../components/edit-screen-info';
import { FlatList, StyleSheet, View, Image, Text } from 'react-native';

import Asus from '../../../assets/logos/brands/asus-logo.svg';
import HyperX from '../../../assets/logos/brands/hyperx-logo-lg.svg';
import Logitech from '../../../assets/logos/brands/logitech.svg';
import PlayStation from '../../../assets/logos/brands/playstation-6.svg';
import Razer from '../../../assets/logos/brands/razer.svg';
import Redragon from '../../../assets/logos/brands/redragon.svg';
import Mouse from '../../../assets/logos/categories/mouse.png';
import Keyboard from '../../../assets/logos/categories/keyboard.png';

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
    renderComponent: () => <Image source={Mouse} style={{ width: 190, height: 190 }} />,
  },
  {
    id: 2,
    brand: 'KeyBoard',
    renderComponent: () => <Image source={Keyboard} style={{ width: 190, height: 190 }} />,
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
    backgroundColor: 'rgba(249, 180, 45, 0.25)',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
});
