import { Stack } from 'expo-router';
import { View, ScrollView, Platform, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { GoBack } from '../GoBack';
import DialogueDescription from '../dividers/DialogueDescription';
import { blurhash } from '../../config/constants/constans';

interface Props {
  images: string[];
  children: React.ReactNode;
  title: string;
  firstDescription: string;
  secondDescription?: string | null;
  dlc?: string;
}

const LayoutDetailScreen = ({
  images,
  children,
  title,
  firstDescription,
  secondDescription,
  dlc,
}: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: title,
          headerLeft: () => <GoBack />,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: Platform.OS === 'ios' ? top + 100 : 0 }}>
        <FlatList
          data={images}
          style={{ marginBottom: 20 }}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
              <Image
                source={{ uri: item }}
                contentFit="contain"
                style={{ width: 400, height: 200, marginHorizontal: 7 }}
                placeholder={blurhash}
                transition={1000}
              />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <View style={{ paddingHorizontal: 15 }}>
          <DialogueDescription
            firstDescription={firstDescription}
            secondDescription={secondDescription ? secondDescription : undefined}
            dlc={dlc ? dlc : undefined}
          />

          {children}
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

export default LayoutDetailScreen;
