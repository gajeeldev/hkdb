import { Text, View } from 'react-native';
import { Image } from 'expo-image';

interface Props {
  id: string;
  created_at: string;
  achievement: string;
  description: string;
  images: string[];
}
export const AchievementsCard = ({ achievement, description, images }: Props) => {
  return (
    <View style={{ flexDirection: 'row', gap: 10 }}>
      <Image source={images[0]} style={{ width: 100, height: 100 }} transition={1000} />
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
    </View>
  );
};
