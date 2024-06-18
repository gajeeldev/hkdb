import { ScrollView, useWindowDimensions, View } from 'react-native';
import { globalStyles } from '../config/theme/theme';
import { Image } from 'expo-image';
import { blurhash } from '../config/constants/constans';
import DialogueDescription from '../components/dividers/DialogueDescription';
import { Title } from '../components/ui/Title';

export const KnightScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[globalStyles.container]}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../../assets/description-image.webp')}
            style={{
              marginTop: 20,
              width: width * 0.5,
              height: height * 0.3,
            }}
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        </View>
        <Title text="The Knight" />

        <DialogueDescription firstDescription="An enigmatic wanderer who descends into Hallownest carrying only a broken nail to fend off foes." />
      </ScrollView>
    </View>
  );
};
