import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '../config/theme/theme';
import { StatusBar, useColorScheme } from 'react-native';
import { Theme, ThemeProvider } from '@react-navigation/native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  isDark: boolean;
  theme: Theme;
  currentTheme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();

  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  const isDarkTheme = currentTheme === 'dark';
  const theme = isDarkTheme ? darkTheme : lightTheme;

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  useEffect(() => {
    StatusBar.setBarStyle(currentTheme === 'dark' ? 'light-content' : 'dark-content');
  }, [currentTheme]);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeProvider value={theme}>
      <ThemeContext.Provider
        value={{
          isDark: isDarkTheme,
          theme: theme,
          currentTheme,
          setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
