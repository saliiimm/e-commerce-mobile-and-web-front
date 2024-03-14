import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { YStack, Theme, H2, Button, ScrollView } from 'tamagui';

import PanierCart from '~/components/carts/PanierCart';
import { MAIN_COLOR } from '~/config/colors';
import textStyles from '~/styles/texts';

const PAGE_HEIGHT = Dimensions.get('window').height;
export default function ModalScreen() {
  return (
    <Theme name="light">
      <ScrollView>
        <YStack
          flex={1}
          alignItems="flex-start"
          justifyContent="flex-start"
          paddingHorizontal={15}
          paddingTop={10}
          position="relative"
          minHeight={PAGE_HEIGHT - 80}>
          <PanierCart />
          <View style={styles.bottomView}>
            <View style={styles.totalView}>
              <H2 style={textStyles.bigTitle}>Total :</H2>
              <H2 style={textStyles.blackSubTitle}>8500DA</H2>
            </View>
            <Button theme="active" style={styles.btn}>
              Proceed to Payment
            </Button>
          </View>
        </YStack>
      </ScrollView>
    </Theme>
  );
}

const styles = StyleSheet.create({
  totalView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: MAIN_COLOR,
  },
  bottomView: {
    width: '100%',
    marginVertical: 10,
    position: 'absolute',
    bottom: 0,
    right: '5%',
  },
});
