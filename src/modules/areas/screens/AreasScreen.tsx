/* eslint-disable prettier/prettier */
import { Button, globalStyles } from '~/modules/core';
import Areas from '../../core/data/areas.json';
import { Link } from 'expo-router';
import { ScrollView, View } from 'react-native';

export const AreasScreen = () => {
  const sortedAreas = [...Areas].sort((a, b) => a.area.localeCompare(b.area));

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {sortedAreas.map((area) => (
          <Link href={`(detail)/area/${area.id}`} asChild key={area.id}>
            <Button title={area.area} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
