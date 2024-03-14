import React from 'react';
import { StyleSheet, View } from 'react-native';
import { YStack, H2, Theme, ScrollView, Button } from 'tamagui';

import Infos from '~/components/inputs/Infos';
import NotConnected from '~/components/modals/NotConnected';
import { MAIN_COLOR } from '~/config/colors';
import textStyles from '~/styles/texts';

const Page = () => {
  return (
    <Theme name="light">
      <ScrollView>
        <NotConnected />
        <YStack flex={1} alignItems="flex-start" justifyContent="flex-start" paddingHorizontal={15}>
          <H2 style={[textStyles.blackHomeTitle]}>Name</H2>
          <Infos placeholder="Change your name" />
          <H2 style={[textStyles.blackHomeTitle]}>Surname</H2>
          <Infos placeholder="Change your Surname" />
          <H2 style={[textStyles.blackHomeTitle]}>Email</H2>
          <Infos placeholder="Change your Email" />
          <H2 style={[textStyles.blackHomeTitle]}>Adress</H2>
          <Infos placeholder="Change your Adress" />
          <H2 style={[textStyles.blackHomeTitle]}>Phone Number</H2>
          <Infos placeholder="Change your Phone Number" />
          <H2 style={[textStyles.blackHomeTitle]}>Password</H2>
          <Infos placeholder="Change your Password" />
          <H2 style={[textStyles.blackHomeTitle]}>Confirm New Password</H2>
          <Infos placeholder="Confirm your Password" />
          <View style={{ width: '100%', alignItems: 'center', marginVertical: 15 }}>
            <Button theme="active" style={styles.btn}>
              Save Changes
            </Button>
          </View>
        </YStack>
      </ScrollView>
    </Theme>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: MAIN_COLOR,
  },
});

export default Page;
