/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, View, Image, Text } from 'react-native';
import { YStack, Theme } from 'tamagui';

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
    renderComponent: () => (
      <Image
        source={require('../../../assets/logos/categories/headphone.png')}
        style={{ width: 190, height: 190 }}
      />
    ),
  },
  {
    id: 4,
    brand: 'Mousepads',
    renderComponent: () => (
      <Image
        source={require('../../../assets/logos/categories/mousepad.png')}
        style={{ width: 190, height: 190, resizeMode: 'contain' }}
      />
    ),
  },
  {
    id: 5,
    brand: 'Controllers',
    renderComponent: () => (
      <Image
        source={require('../../../assets/logos/categories/controller.png')}
        style={{ width: 190, height: 190, resizeMode: 'contain' }}
      />
    ),
  },
  {
    id: 6,
    brand: 'Microphones and Webcams',
    renderComponent: () => (
      <Image
        source={require('../../../assets/logos/categories/microphone.png')}
        style={{ width: 190, height: 190, resizeMode: 'contain' }}
      />
    ),
  },
  {
    id: 7,
    brand: 'Portable Computers',
    renderComponent: () => (
      <Image
        source={require('../../../assets/logos/categories/laptop.png')}
        style={{ width: 190, height: 190, resizeMode: 'contain' }}
      />
    ),
  },
  {
    id: 8,
    brand: 'Desktop Config',
    renderComponent: () => (
      <Image
        source={require('../../../assets/logos/categories/desktop.png')}
        style={{ width: 190, height: 190, resizeMode: 'contain' }}
      />
    ),
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
