import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { colors } from '../../config/theme/theme';

export const Subtitle = ({ text }: { text: string }) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Text style={styles.text}>{text}</Text>
      <View style={{ ...styles.divider, width: width * 0.9 }} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    color: colors.textColor,
    fontSize: 24,
    fontFamily: 'TrajanPro-Bold',
  },
  divider: {
    opacity: 0.5,
    marginBottom: 15,
    borderBottomColor: colors.textColor,
    borderBottomWidth: 2,
  },
});
