import { Text, View, useWindowDimensions } from 'react-native';

export const Subtitle = ({ text }: { text: string }) => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Text
        style={{
          marginTop: 20,
          color: '#f5f5f5',
          fontSize: 24,
          fontFamily: 'TrajanPro-Bold',
        }}>
        {text}
      </Text>
      <View
        style={[
          {
            width: width * 0.9,
            height: height * 0.001,
            opacity: 0.5,
            backgroundColor: 'white',
            marginBottom: 20,
          },
        ]}
      />
    </>
  );
};
