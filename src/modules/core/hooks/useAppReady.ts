import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Font from 'expo-font';
import * as SystemUI from 'expo-system-ui';
import { customFonts } from '../config/constants/constans';
import { darkTheme } from '../config/theme/theme';

SystemUI.setBackgroundColorAsync(darkTheme.colors.background);

export const useAppReady = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Ionicons.font);
        await Font.loadAsync(customFonts);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return {
    appIsReady,
  };
};
