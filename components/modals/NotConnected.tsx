/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Dialog, H2, H6 } from 'tamagui';

import { MAIN_COLOR } from '~/config/colors';
import textStyles from '~/styles/texts';

const NotConnected = () => {
  const [visible1, setVisible1] = useState(false);

  return (
    <Dialog modal open={visible1}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title style={textStyles.blackModalTitle}>Login</Dialog.Title>

          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dumhhj9qh/image/upload/v1710418193/samples/app/rluafoivhyooc4i2ohf0.png',
              }}
              style={{ width: 50, height: 50 }}
            />
            <H2 style={[textStyles.blackModalTitle, { textAlign: 'center' }]}>
              You are Not connected
            </H2>
            <H6 style={[textStyles.ModalContent, { textAlign: 'center' }]}>
              You need to be connected to access to this page
            </H6>
          </View>
          <Dialog.Close displayWhenAdapted asChild>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                setVisible1(!visible1);
              }}>
              <Text style={{ color: 'white' }}>LogIn</Text>
            </TouchableOpacity>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 40,
    margin: 12,
    borderRadius: 12,
    backgroundColor: MAIN_COLOR,
  },
});

export default NotConnected;
