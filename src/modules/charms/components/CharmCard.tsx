import Animated, { FadeInDown } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { Pressable, Text, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';

interface Props {
  href: string;
  title: string;
  image: string;
  index: number;
}
export const CharmCard = ({ href, title, image, index }: Props) => {
  const { width, height } = useWindowDimensions();
  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <Link href={href} asChild>
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
            overflow: 'hidden',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: '#3A3A3A',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 10,
            elevation: 10,
            width: width / 2.25,
            height: height / 4.5,
          }}>
          <Image
            source={image}
            style={{ width: '100%', height: height / 8 }}
            transition={1000}
            contentFit="contain"
          />
          <Text
            style={{
              color: '#F5F5F5',
              fontSize: width / 30,
              fontFamily: 'TrajanPro-Bold',
              paddingVertical: 10,
              textAlign: 'center',
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
