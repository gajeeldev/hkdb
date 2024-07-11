import { View, Text, ScrollView, Platform, useWindowDimensions, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Image } from 'expo-image';
import { useQuery } from '@tanstack/react-query';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getItemById } from '../actions/getItemById';
import { blurhash, colors, FullScreenLoader, globalStyles, GoBack } from '~/modules/core';

export const MapAndQuillScreen = ({ id }: { id: string | string[] }) => {
  const { top } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const { data: item } = useQuery({
    queryKey: ['item', id],
    queryFn: () => getItemById(id),
    staleTime: 1000 * 60 * 60, //1 hour
  });

  if (!item) return <FullScreenLoader />;

  return (
    <View style={globalStyles.container}>
      <Stack.Screen
        options={{
          title: item.item,
          headerLeft: () => <GoBack />,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: Platform.OS === 'ios' ? top + 100 : 0 }}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.images[0] }}
            contentFit="contain"
            style={{ width: width, height: height * 0.25, marginHorizontal: 7 }}
            placeholder={blurhash}
            transition={1000}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    color: colors.textColor,
    marginTop: 10,
  },
});
