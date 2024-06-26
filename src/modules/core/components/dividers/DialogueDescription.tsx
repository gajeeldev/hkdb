import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { blurhash } from '../../config/constants/constans';
import { dlcTypes } from '../../domain/entities';

interface Props {
  firstDescription: string;
  secondDescription?: string | null;
  dlc?: string;
}

const DialogueDescription = ({ firstDescription, secondDescription, dlc }: Props) => {
  const { width, height, fontScale } = useWindowDimensions();

  let image = require('../../../../assets/images/divider/Dialogue_Top.webp');

  if (dlc === dlcTypes.Bestiary || dlc === dlcTypes.Godmaster) {
    image = require('../../../../assets/images/divider/Bestiary.webp');
  }
  if (dlc === dlcTypes.HiddenDreams) {
    image = require('../../../../assets/images/divider/Dreamjournal.webp');
  }
  if (dlc === dlcTypes.TheGrimmTroupe) {
    image = require('../../../../assets/images/divider/Troupejournal.webp');
  }

  return (
    <View style={styles.container}>
      {/* Dialogue Top */}
      <Image
        source={image}
        placeholder={blurhash}
        style={[
          {
            marginBottom: height * 0.01,
            width: width * 0.8,
            height: height * 0.06,
          },
          styles.shadowImage,
        ]}
        contentFit="contain"
        transition={1000}
      />

      <Text
        style={{
          color: '#f5f5f5',
          fontStyle: 'italic',
          fontSize: fontScale * 18,
          textAlign: 'center',
        }}>
        {firstDescription}
      </Text>

      {/* Second Description */}
      {secondDescription && (
        <SecondDescription
          width={width}
          height={height}
          fontScale={fontScale}
          textColor={'#f5f5f5'}
          description={secondDescription}
        />
      )}

      {/* Dialogue Bottom */}
      <Image
        source={require('../../../../assets/images/divider/Dialogue_Bottom.webp')}
        placeholder={blurhash}
        style={[
          {
            marginTop: height * 0.01,
            width: width * 0.8,
            height: height * 0.04,
          },
          styles.shadowImage,
        ]}
        contentFit="contain"
        transition={1000}
      />
    </View>
  );
};

export default DialogueDescription;

interface SecondDescriptionProps {
  width: number;
  height: number;
  fontScale: number;
  textColor: string;
  description: string;
}
const SecondDescription = ({
  width,
  height,
  fontScale,
  textColor,
  description,
}: SecondDescriptionProps) => {
  return (
    <>
      {/** divider */}
      <View
        style={[
          {
            width: width * 0.7,
            height: height * 0.001,
            marginVertical: height * 0.01,
            opacity: 0.5,
            backgroundColor: 'white',
          },
          styles.shadowImage,
        ]}
      />

      <Text
        style={{
          color: textColor,
          fontStyle: 'italic',
          fontSize: fontScale * 18,
          textAlign: 'center',
        }}>
        {description}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowImage: {
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
