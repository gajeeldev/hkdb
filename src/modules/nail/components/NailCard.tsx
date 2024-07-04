import { Text, useWindowDimensions, View } from 'react-native';
import { Image } from 'expo-image';
import Animated, { FadeInDown } from 'react-native-reanimated';

interface Props {
  nail: string;
  damage: number;
  upgrade_cost: string;
  description: string;
  images: string[];
  index: number;
}
export const NailCard = ({ nail, damage, upgrade_cost, description, images, index }: Props) => {
  const { width, height } = useWindowDimensions();
  return (
    <Animated.View
      entering={FadeInDown.delay(200 * index)}
      style={{
        flexDirection: 'row',
        gap: 10,
        borderBottomColor: 'rgba(245, 245, 245, 0.15)',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingBottom: 10,
      }}>
      <Image
        source={images[0]}
        style={{ width: width * 0.15, height: height * 0.15 }}
        contentFit="contain"
        transition={1000}
      />
      <View style={{ gap: 10, flex: 1 }}>
        <Text style={{ color: '#f5f5f5', fontSize: 24, fontWeight: 'bold' }}>{nail}</Text>
        <Text
          adjustsFontSizeToFit
          style={{
            color: '#f5f5f5',
            fontSize: width / 35,
          }}>
          {description}
        </Text>

        <View>
          <Text
            adjustsFontSizeToFit
            style={{
              color: '#f5f5f5',
              fontSize: width / 40,
            }}>
            {`Damage: ${damage}`}
          </Text>
          <Text
            adjustsFontSizeToFit
            style={{
              color: '#f5f5f5',
              fontSize: width / 40,
            }}>
            {`Upgrade Cost: ${upgrade_cost}`}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};