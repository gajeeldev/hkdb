import { Link } from 'expo-router';
import { Button, Container, ScreenContent } from '~/modules/core';

export const SettingsScreen = () => {
  return (
    <Container>
      <ScreenContent path="app/settings/settings.tsx" title="Settings" />
      <Link href={'/appearance'}>
        <Button title="Go to Appearance" />
      </Link>
    </Container>
  );
};
