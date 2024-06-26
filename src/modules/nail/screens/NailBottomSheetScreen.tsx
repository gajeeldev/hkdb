import { View, Text, Pressable, ScrollView } from 'react-native';
import Nail from '../../../modules/core/data/nail.json';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { blurhash } from '~/modules/core';

const NailBottomSheetScreen = ({ id }: { id: string | string[] }) => {
  const router = useRouter();
  const nail = Nail.find((nail) => nail.id === id);

  if (!nail) return null;
  return (
    <View style={{ flex: 1 }}>
      <Pressable style={{ flex: 1 }} onPress={() => router.back()} />

      <BlurView
        experimentalBlurMethod="dimezisBlurView"
        intensity={90}
        tint="dark"
        style={{
          height: '50%',
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}>
        <Text
          style={{
            color: '#f5f5f5',
            fontFamily: 'TrajanPro-Bold',
            fontSize: 25,
            padding: 10,
            textAlign: 'center',
          }}>
          {nail.nail}
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: nail.images[0] }}
              contentFit="contain"
              style={{
                width: 100,
                height: 200,
                transform: [{ rotate: '270deg' }],
              }}
              placeholder={blurhash}
              transition={1000}
            />
          </View>

          <View>
            <Text style={{ color: '#f5f5f5', fontSize: 16, padding: 10, textAlign: 'center' }}>
              {nail.description}
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
              <Subtitle text="Upgrade Cost" value={nail.upgrade_cost} />
              <Subtitle text="Damage" value={nail.damage.toString()} />
            </View>
          </View>

          <View style={{ height: 20 }} />
        </ScrollView>
      </BlurView>
    </View>
  );
};

export default NailBottomSheetScreen;

const Subtitle = ({ text, value }: { text: string; value: string }) => {
  return (
    <View>
      <Text
        style={{
          color: '#f5f5f5',
          fontFamily: 'TrajanPro-Bold',
          fontSize: 20,
        }}>
        {text}
      </Text>
      <View
        style={{
          opacity: 0.5,
          borderBottomColor: '#f5f5f5',
          borderBottomWidth: 2,
          width: '100%',
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          color: '#f5f5f5',
        }}>
        {value}
      </Text>
    </View>
  );
};
