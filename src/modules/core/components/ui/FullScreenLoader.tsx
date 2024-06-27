import { View, ActivityIndicator, Platform, Text } from 'react-native';

export const FullScreenLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252525',
      }}>
      <ActivityIndicator size={50} color={'#f5f5f5'} />

      {Platform.OS === 'ios' ? (
        <Text style={{ color: '#f5f5f5', fontSize: 15, opacity: 0.5 }}>Loading...</Text>
      ) : null}
    </View>
  );
};
