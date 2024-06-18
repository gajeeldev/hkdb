import { Text } from 'react-native';
import { useThemeContext } from '../../hooks/useThemeContext';

export const Title = ({ text }: { text: string }) => {


  const { theme } = useThemeContext();
  return (
    <Text
      style={{
        color: theme.colors.text,
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'TrajanPro-Regular',
      }}>
      {text}
    </Text>
  );
};
