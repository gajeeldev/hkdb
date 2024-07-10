import { Text, useWindowDimensions, View } from 'react-native';
import { Image } from 'expo-image';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { blurhash } from '~/modules/core';

interface Props {
  achievement: string;
  description: string;
  images: string[];
  index: number;
}

export const AchievementsCard = ({ achievement, description, images, index }: Props) => {
  const { width, height } = useWindowDimensions();
  return (
    <Animated.View
      entering={FadeInDown.delay(200 * index)}
      style={{ flexDirection: 'row', gap: 10 }}>
      <Image
        source={images[0]}
        style={{ width: width / 3.5, height: height / 6.5 }}
        contentFit="contain"
        placeholder={blurhash}
        priority="high"
      />
      <View style={{ gap: 10, flex: 1 }}>
        <Text style={{ color: '#f5f5f5', fontSize: 24, fontWeight: 'bold' }}>{achievement}</Text>
        <Text
          adjustsFontSizeToFit
          style={{
            color: '#f5f5f5',
            fontSize: 16,
          }}>
          {description}
        </Text>
      </View>
    </Animated.View>
  );
};
