import { ScrollView, View } from 'react-native';
import { Button, globalStyles } from '~/modules/core';
import Items from '../../core/data/items.json';
import { Link } from 'expo-router';

export const ItemsScreen = () => {
  const sortedItems = [...Items].sort((a, b) => a.item.localeCompare(b.item));

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {sortedItems.map((item) => (
          <Link href={`(detail)/item/${item.id}`} asChild key={item.id}>
            <Button title={item.item} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
