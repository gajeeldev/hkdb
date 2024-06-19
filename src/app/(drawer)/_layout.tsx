import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => (
  <Drawer screenOptions={{ headerTransparent: true, }}>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'The Knight',
        drawerLabel: 'The Knight',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />

    <Drawer.Screen
      name="achievements/index"
      options={{
        headerTitle: 'Achievements',
        drawerLabel: 'Achievements',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="trophy-outline" size={size} color={color} />
        ),
      }}
    />

    <Drawer.Screen
      name="areas/index"
      options={{
        headerTitle: 'Areas',
        drawerLabel: 'Areas',
        drawerIcon: ({ size, color }) => <Ionicons name="map-outline" size={size} color={color} />,
      }}
    />

    <Drawer.Screen
      name="bosses/index"
      options={{
        headerTitle: 'Bosses',
        drawerLabel: 'Bosses',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="skull-outline" size={size} color={color} />
        ),
      }}
    />

    <Drawer.Screen
      name="charms/index"
      options={{
        headerTitle: 'Charms',
        drawerLabel: 'Charms',
        drawerIcon: ({ size, color }) => <Ionicons name="disc-outline" size={size} color={color} />,
      }}
    />

    <Drawer.Screen
      name="enemies/index"
      options={{
        headerTitle: 'Enemies',
        drawerLabel: 'Enemies',
        drawerIcon: ({ size, color }) => <Ionicons name="bug-outline" size={size} color={color} />,
      }}
    />

    <Drawer.Screen
      name="items/index"
      options={{
        headerTitle: 'Items',
        drawerLabel: 'Items',
        drawerIcon: ({ size, color }) => <Ionicons name="cube-outline" size={size} color={color} />,
      }}
    />

    <Drawer.Screen
      name="nail/index"
      options={{
        headerTitle: 'Nail',
        drawerLabel: 'Nail',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="brush-outline" size={size} color={color} />
        ),
      }}
    />

    <Drawer.Screen
      name="npcs/index"
      options={{
        headerTitle: 'NPCs',
        drawerLabel: 'NPCs',
        drawerIcon: ({ size, color }) => <Ionicons name="leaf-outline" size={size} color={color} />,
      }}
    />

    <Drawer.Screen
      name="spells_and_abilities/index"
      options={{
        headerTitle: 'Spells & Abilities',
        drawerLabel: 'Spells & Abilities',
        drawerIcon: ({ size, color }) => <Ionicons name="book-outline" size={size} color={color} />,
      }}
    />
  </Drawer>
);

export default DrawerLayout;
