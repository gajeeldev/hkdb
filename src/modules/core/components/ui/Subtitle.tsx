import { Text, View, useWindowDimensions } from 'react-native';

export const Subtitle = ({ text }: { text: string }) => {
  const { width } = useWindowDimensions();
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
            opacity: 0.5,
            marginBottom: 15,
            borderBottomColor: '#f5f5f5',
            borderBottomWidth: 2,
          },
        ]}
      />
    </>
  );
};
