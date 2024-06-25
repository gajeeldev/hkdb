import { ScrollView, View } from 'react-native';
import Charms from '../../core/data/charms.json';
import { Button, globalStyles } from '~/modules/core';
import { Link } from 'expo-router';

export const CharmsScreen = () => {
  const sortedCharms = [...Charms].sort((a, b) => a.charm.localeCompare(b.charm));

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {sortedCharms.map((charm) => (
          <Link href={`(detail)/charm/${charm.id}`} asChild key={charm.id}>
            <Button title={charm.charm} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
