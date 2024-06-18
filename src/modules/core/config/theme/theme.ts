import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: 'red',
    background: '#f5f5f5',
    card: '#ffffff',
    text: '#252525',
    border: '#000000',
    notification: '#000000',
  },
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: 'blue',
    background: '#252525',
    card: '#000000',
    text: '#f5f5f5',
    border: '#ffffff',
    notification: '#ffffff',
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
});
