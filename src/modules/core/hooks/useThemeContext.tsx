import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useThemeContext = () => {
  const { currentTheme, isDark, theme, setTheme } = useContext(ThemeContext);

  return { currentTheme, isDark, theme, setTheme };
};
