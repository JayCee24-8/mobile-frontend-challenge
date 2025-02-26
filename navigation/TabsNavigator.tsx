import React from 'react';
import { Image, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

// Pantalla vacía temporal para otras pestañas
const EmptyScreen = () => null;

// Creando el Tab Navigator
const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;
          let color = focused ? '#018765' : '#434343'; // ✅ Green for active, gray for inactive

          if (route.name === 'Inicio') {
            icon = require('../assets/icons/Home.png');
          } else if (route.name === 'Operaciones') {
            icon = require('../assets/icons/Arrows.png');
          } else if (route.name === 'Productos') {
            icon = require('../assets/icons/Card.png');
          }

          return (
            <View className="flex items-center">
              <Image source={icon} style={{ tintColor: color }} className="h-5 w-5" />
            </View>
          );
        },
        tabBarLabel: ({ focused }) => (
          <Text
            className={`text-[12px] font-semibold ${focused ? 'text-green-600' : 'text-gray-600'}`}>
            {route.name}
          </Text>
        ),
        tabBarActiveTintColor: '#018765',
        tabBarInactiveTintColor: '#434343',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          height: 92,
          paddingBottom: 16,
          paddingHorizontal: 24,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}>
      <Tabs.Screen name="Inicio" options={{ headerShown: false }} component={HomeScreen} />
      <Tabs.Screen name="Operaciones" options={{ headerShown: false }} component={EmptyScreen} />
      <Tabs.Screen name="Productos" component={EmptyScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
