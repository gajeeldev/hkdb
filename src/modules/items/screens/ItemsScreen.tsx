import { ScrollView, View } from 'react-native';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Button, FullScreenLoader, globalStyles } from '~/modules/core';
import { getItems } from '../actions/getItems';

export const ItemsScreen = () => {
  const { data: items } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (!items) return <FullScreenLoader/>;

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ paddingTop: 20 }}>
        {items.map((item) => (
          <Link href={`(detail)/item/${item.id}`} asChild key={item.id}>
            <Button title={item.item} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};
