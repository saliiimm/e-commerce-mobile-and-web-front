import { YStack, H2, Separator, Theme } from 'tamagui';

import EditScreenInfo from '../../../components/edit-screen-info';

export default function TabTwoScreen() {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Tab Two</H2>
        <Separator />
        <EditScreenInfo path="app/(drawer)/(tabs)/two.tsx" />
      </YStack>
    </Theme>
  );
}
