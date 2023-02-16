/* eslint-disable import/prefer-default-export */
import {StyleSheet} from 'react-native';

export const Colors = {
  Background: '#ffffff',
  HeaderFont: '#683BC6',
  Font: '#646464DE',
  Accent: '#D9D9D9',
  PurpleAccent: '#683BC6',
  Alert: '#fc7e00',
  Gray: '#8f8f8f',
  Green: '#1abd46',
  Red: '#e30505',
};

export const Styles = StyleSheet.create({
  Background: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.Background,
  },
});

export const Shadows = {
  AccentBigger: '0px 0px 5px #0288f5',
  AccentSmaller: '0px 0px 2px #0288f5',
};
