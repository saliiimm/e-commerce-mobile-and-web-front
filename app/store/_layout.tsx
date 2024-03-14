import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: 'Salim Store',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <MaterialIcons name="home" size={size} color={color} />,
        headerRight: () => (
          <Link href="/modal" asChild>
            <Pressable>
              {({ pressed }) => (
                <AntDesign
                  name="shoppingcart"
                  size={25}
                  color="gray"
                  style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    />
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'My Profile',
        drawerLabel: 'Profile',
        drawerIcon: ({ size, color }) => <AntDesign name="user" size={size} color={color} />,
      }}
    />
  </Drawer>
);

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
});

export default DrawerLayout;
