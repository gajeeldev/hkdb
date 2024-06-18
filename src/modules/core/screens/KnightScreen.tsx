import { ScrollView, View } from 'react-native';
import { globalStyles } from '../config/theme/theme';
import { Image } from 'expo-image';
import { blurhash } from '../config/constants/constans';
import { useTheme } from '@react-navigation/native';
import { Button } from '../components/Button';
import { useThemeContext } from '../hooks/useThemeContext';

export const KnightScreen = () => {

  const {setTheme, currentTheme} = useThemeContext()

  // toggle theme
  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={[globalStyles.container]}>
      <ScrollView>
        <Image
          source={require('../../../assets/description-image.webp')}
          style={{
            width: 350,
            height: 300,
          }}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />

        <Button title="set color" onPress={toggleTheme} />
      </ScrollView>


    </View>
  );
};
