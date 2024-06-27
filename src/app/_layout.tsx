import { Platform } from 'react-native';
import { Stack } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import { useFonts } from 'expo-font';
import { ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { customFonts, darkTheme } from '~/modules/core';

const queryClient = new QueryClient();

export const unstable_settings = {
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [fontLoaded] = useFonts(customFonts);

  SystemUI.setBackgroundColorAsync(darkTheme.colors.background);

  if (!fontLoaded) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={darkTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerBlurEffect: 'regular',
              headerTransparent: Platform.OS === 'ios',
              headerLargeTitle: true,
              headerLargeTitleStyle: {
                fontFamily: 'TrajanPro-Bold',
                fontSize: 25,
              },
              headerTitleStyle: {
                fontFamily: 'TrajanPro-Bold',
              },
              headerTitleAlign: 'center',
              animation: 'slide_from_right',
            }}>
            {/* Drawer */}
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />

            {/* Settings */}
            <Stack.Screen name="(settings)/settings" options={{ title: 'Settings' }} />

            {/* Detail */}
            <Stack.Screen name="(detail)/area/[id]" options={{ title: 'Area' }} />
            <Stack.Screen name="(detail)/boss/[id]" options={{ title: 'Boss' }} />
            <Stack.Screen name="(detail)/charm/[id]" options={{ title: 'Charm' }} />
            <Stack.Screen name="(detail)/enemy/[id]" options={{ title: 'Enemy' }} />
            <Stack.Screen name="(detail)/item/[id]" options={{ title: 'Item' }} />
            <Stack.Screen
              name="(detail)/nail/[id]"
              options={{
                presentation: 'transparentModal',
                animation: 'slide_from_bottom',
                headerShown: false,
              }}
            />
            <Stack.Screen name="(detail)/npc/[id]" options={{ title: 'NPC' }} />
            <Stack.Screen
              name="(detail)/spell_and_ability/[id]"
              options={{ title: 'Spell & Ability' }}
            />
          </Stack>
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
