import { Text } from 'react-native';
import { useThemeContext } from '../../hooks/useThemeContext';

export const Title = ({ text }: { text: string }) => {
  return (
    <Text
      style={{
        color: '#f5f5f5',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'TrajanPro-Bold',
      }}>
      {text}
    </Text>
  );
};
