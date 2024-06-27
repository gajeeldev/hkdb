import Achievements from '../data/achievements.json';

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

interface Achievement {
  id: string;
  created_at: string;
  achievement: string;
  description: string;
  images: string[];
}

export const getAchievements = (): Promise<Achievement[]> => {
  const sortedAchievements = [...Achievements, ...manualAchievements].sort((a, b) =>
    a.achievement.localeCompare(b.achievement)
  );

  return new Promise((resolve) => {
    resolve(sortedAchievements);
  });
};
