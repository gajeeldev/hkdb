import { Theme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const colors = {
  textColor: '#f5f5f5',
  cardBackground: '#3A3A3A',
}


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
  },
});
