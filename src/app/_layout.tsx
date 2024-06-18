import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from '~/modules/core';

export const unstable_settings = {
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const currentTheme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider value={currentTheme}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="(settings)/settings" options={{ title: 'Settings' }} />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
