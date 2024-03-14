/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Dimensions } from 'react-native';

const PAGE_WIDTH = Dimensions.get('window').width;

interface HomeIllustrationProps {
  imageSource: string;
}

const HomeIllustration: React.FC<HomeIllustrationProps> = ({ imageSource }) => {
  return (
    <Image
      source={{ uri: imageSource }}
      style={{ width: PAGE_WIDTH * 0.92, height: 200, borderRadius: 12, marginBottom: 10 }}
    />
  );
};

export default HomeIllustration;
