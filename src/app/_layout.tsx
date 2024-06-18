import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeContextProvider } from '~/modules/core/context/ThemeContext';

export const unstable_settings = {
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="(settings)/settings" options={{ title: 'Settings' }} />
        </Stack>
      </GestureHandlerRootView>
    </ThemeContextProvider>
  );
}
