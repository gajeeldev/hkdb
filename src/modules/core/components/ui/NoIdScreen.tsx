import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../config/theme/theme';

export const NoIdScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.textColor }}>No ID</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
