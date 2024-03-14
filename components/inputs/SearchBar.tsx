/* eslint-disable prettier/prettier */
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Input, XStack } from 'tamagui';

const SearchBar = () => {
  return (
    <XStack
      alignItems="center"
      space="$3"
      marginVertical="$3"
      backgroundColor="#F8F8F8"
      borderRadius={9}
      borderColor="#F2F2F2"
      borderWidth={1}
      paddingHorizontal={7}
      paddingVertical={2}>
      <Input flex={1} size="$3" placeholder="Search for products..." borderWidth={0} />
      <FontAwesome name="search" size={20} color="black" />
    </XStack>
  );
};

export default SearchBar;
