import React from 'react';
import { StyleSheet, View } from 'react-native';
import { YStack, H2, Theme, H5, Button } from 'tamagui';

import BrandsCarousel from '../../components/carousels/BrandsCarousel';
import textStyles from '~/styles/texts';

const Page = () => {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center" gap={40}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <H2 style={textStyles.bigTitle}>My profile</H2>
        </View>
      </YStack>
    </Theme>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 300,
  },
});

export default Page;
