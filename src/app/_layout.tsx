import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { customFonts } from '~/modules/core';
import { ThemeContextProvider } from '~/modules/core/context/ThemeContext';

export const unstable_settings = {
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [fontLoaded] = useFonts(customFonts);

  if (!fontLoaded) {
    return null;
  }
  return (
    <ThemeContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="(settings)/settings" options={{ title: 'Settings' }} />
          <Stack.Screen name="(settings)/appearance" options={{ title: 'Appearance' }} />
        </Stack>
      </GestureHandlerRootView>
    </ThemeContextProvider>
  );
}
