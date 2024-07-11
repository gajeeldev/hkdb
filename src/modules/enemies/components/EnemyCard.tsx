import { Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { blurhash, colors } from '~/modules/core';

interface Props {
  href: string;
  title: string;
  image: string;
  index: number;
}
export const EnemyCard = ({ href, title, image, index }: Props) => {
  const { width, height } = useWindowDimensions();

  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <Link href={href} asChild>
        <Pressable
          style={{
            ...styles.container,
            width: width / 2.25,
            height: width / 2.25,
          }}>
          <Image
            source={image}
            style={{ width: '100%', height: height / 8 }}
            contentFit="contain"
            placeholder={blurhash}
            priority="high"
          />
          <Text
            style={{
              ...styles.text,
              fontSize: width / 30,
            }}
            numberOfLines={2}
            adjustsFontSizeToFit>
            {title}
          </Text>
        </Pressable>
      </Link>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: colors.cardBackground,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 10,
    elevation: 10,
  },
  text: {
    color: colors.textColor,
    fontFamily: 'TrajanPro-Bold',
    paddingVertical: 10,
    textAlign: 'center',
  },
});
