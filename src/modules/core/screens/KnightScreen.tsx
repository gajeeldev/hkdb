import { ScrollView, View } from 'react-native';
import { globalStyles } from '../config/theme/theme';
import { Image } from 'expo-image';
import { blurhash } from '../config/constants/constans';
import { useTheme } from '@react-navigation/native';

export const KnightScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={[globalStyles.container, { backgroundColor: colors.background }]}>
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
      </ScrollView>


    </View>
  );
};
