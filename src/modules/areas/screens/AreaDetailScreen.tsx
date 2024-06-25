import { View, Text, ScrollView } from 'react-native';
import Areas from '../../core/data/areas.json';
import { Stack } from 'expo-router';
import { globalStyles, GoBack, Subtitle, Title } from '~/modules/core';

export const AreaDetailScreen = ({ id }: { id: string | string[] }) => {
  const area = Areas.find((area) => area.id === id);

  if (!area) return null;

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: area?.area,
          headerLeft: () => <GoBack />,
        }}
      />
      <ScrollView>
        <Title text={area.area} />

        <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
          {area.game_description}
        </Text>

        <Subtitle text="Description" />
        <Text style={{ color: 'white', marginTop: 20 }}>{area.description}</Text>

        <Subtitle text="Lore" />
        <Text style={{ color: 'white', marginTop: 20 }}>{area.lore}</Text>

        <Subtitle text="How to Access" />
        <Text style={{ color: 'white', marginTop: 20 }}>{area.how_to_access}</Text>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
