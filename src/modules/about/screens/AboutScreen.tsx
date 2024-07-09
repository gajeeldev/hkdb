import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { View, Text, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as MailComposer from 'expo-mail-composer';
import * as WebBrowser from 'expo-web-browser';
import { blurhash, globalStyles, GoHome, Subtitle } from '~/modules/core';

export const AboutScreen = () => {
  const { top } = useSafeAreaInsets();

  const sendEmail = async () => {
    await MailComposer.composeAsync({
      recipients: ['gajeeldev@gmail.com'],
      subject: 'HKDB - Report an issue',
    });
  };

  const openBrowser = async (url: string) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <Stack.Screen options={{ headerLeft: () => <GoHome />, animation: 'slide_from_bottom' }} />
      {/* Header */}
      <View
        style={{
          marginTop: Platform.OS === 'ios' ? top + 100 : 20,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <Image
          source={require('../../../assets/icon.png')}
          style={{ width: 50, height: 50 }}
          contentFit="contain"
          placeholder={blurhash}
        />
        <View>
          <Text style={{ color: '#f5f5f5', fontSize: 18, fontWeight: 'bold' }}>HKDB</Text>
          <Text style={{ color: '#f5f5f5', opacity: 0.5 }}>1.0.0</Text>
        </View>
      </View>

      <Subtitle text="Report an Issue" />
      <Item text="Send an Email" icon="mail" onPress={sendEmail} />

      <Subtitle text="Links" />
      <Item
        text="Github"
        icon="logo-github"
        onPress={() => openBrowser('https://github.com/gajeeldev/hkdb')}
      />
      <Subtitle text="Resources" />
      <Item
        text="Hollow Knight Wiki"
        image={require('../../../assets/icon.png')}
        onPress={() => openBrowser('https://hollowknight.wiki/w/Hollow_Knight_Wiki')}
      />
      <Item
        text="Hollow Knight Wiki By fextralife"
        image={require('../../../assets/icon.png')}
        onPress={() => openBrowser('https://hollowknight.wiki.fextralife.com/Hollow+Knight+Wiki')}
      />
      <Item
        text="SplashScreen Image By Pedro Silva"
        icon="logo-pinterest"
        onPress={() => openBrowser('https://github.com/gajeeldev/hkdb')}
      />

      {/* Support me */}
      <Subtitle text="Support Me" />
      <Text style={{ color: '#f5f5f5', opacity: 0.5 }}>
        If you like the app, please consider supporting me. I appreciate it!
      </Text>
      <Item
        text="Paypal"
        icon="logo-paypal"
        onPress={() => openBrowser('https://www.paypal.com/paypalme/GilbertAcosta95')}
      />
      <Item
        text="Patreon"
        image={require('../../../assets/patreon.png')}
        onPress={() => openBrowser('https://patreon.com/gajeeldev')}
      />

      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

interface Props {
  text: string;
  icon?: keyof typeof Ionicons.glyphMap;
  image?: string;
  onPress?: () => void;
}
const Item = ({ text, icon, image, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {image ? (
          <Image
            priority="high"
            source={image}
            style={{ width: 24, height: 24 }}
            contentFit="contain"
            placeholder={blurhash}
          />
        ) : (
          <Ionicons name={icon} size={24} color="#f5f5f5" />
        )}

        <Text style={{ color: '#f5f5f5', fontSize: 16, marginLeft: 10 }}>{text}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#f5f5f5" />
    </TouchableOpacity>
  );
};
