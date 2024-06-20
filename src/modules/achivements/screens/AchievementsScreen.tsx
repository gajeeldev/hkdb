import { FlatList, Text, View } from 'react-native';
import { globalStyles } from '~/modules/core';
import Achievements from '../../core/data/achievements.json';
import { Image } from 'expo-image';

const manualAchievements = [
  {
    id: 'a',
    created_at: '2024-06-04 17:15:45.849097+00',
    achievement: 'test 1',
    description: 'description 1',
    images: ['https://picsum.photos/200'],
  },
  {
    id: 'b',
    created_at: '2024-06-04 17:15:45.849097+00',
    achievement: 'test 2',
    description: 'description 2',
    images: ['https://picsum.photos/200'],
  },
];

export const AchievementsScreen = () => {
  Achievements.sort((a, b) => a.achievement.localeCompare(b.achievement));

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={[...Achievements, ...manualAchievements]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AchievementsCard {...item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListHeaderComponent={() => <View style={{ height: 20 }} />}
        ListFooterComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

interface Props {
  id: string;
  created_at: string;
  achievement: string;
  description: string;
  images: string[];
}
const AchievementsCard = ({ achievement, description, images }: Props) => {
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
