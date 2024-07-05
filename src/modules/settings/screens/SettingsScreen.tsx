import { ScrollView, Text } from 'react-native';
import HeaderLeftButton from '~/modules/core/components/router/HeaderLeftButton';

export const SettingsScreen = () => {
  return (
    <>
      <ScrollView>
        {Array.from({ length: 100 }, (_, index) => (
          <Text key={index} style={{ color: 'white' }}>
            {index}
          </Text>
        ))}
        <HeaderLeftButton />
      </ScrollView>
    </>
  );
};
