import { View, Text } from 'react-native';
import { Button } from '~/modules/core';
import { useThemeContext } from '~/modules/core/hooks/useThemeContext';

export const AppearanceScreen = () => {
  const { setTheme, currentTheme } = useThemeContext();

  // toggle theme
  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <View>
      <Text>AppearanceScreen</Text>
      <Button title="set color" onPress={toggleTheme} />
    </View>
  );
};
