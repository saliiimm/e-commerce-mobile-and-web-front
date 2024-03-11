/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

import { MAIN_COLOR } from '../config/colors';

const { width } = Dimensions.get('window');
const scaleFactor = width < 600 ? 0.8 : 1.0;

const textStyles = StyleSheet.create({
  bigTitle: {
    color: 'black',
    fontSize: 34 * scaleFactor,
    fontFamily: 'Outfit',
  },
  blackSubTitle: {
    color: 'black',
    fontSize: 28 * scaleFactor,
    fontFamily: 'Outfit',
  },
  blackMidTitle: {
    color: 'black',
    fontSize: 24 * scaleFactor,
    fontFamily: 'Outfit',
  },
  whiteMidTitle: {
    color: 'white',
    fontSize: 24 * scaleFactor,
    fontFamily: 'Outfit',
  },
  LittleTitle: {
    color: 'black',
    fontSize: 20 * scaleFactor,
    fontFamily: 'Outfit',
  },
  LittleDetail: {
    color: 'black',
    fontSize: 15 * scaleFactor,
    fontFamily: 'Outfit',
    textAlign: 'center',
  },
});
export default textStyles;
