import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransferScreen from 'screens/TransferScreen';
import TabsNavigator from './TabsNavigator';

export type RootStackParamList = {
  TabsNavigator: undefined;
  TransferScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabsNavigator">
        {/* Main App */}
        <Stack.Screen
          name="TabsNavigator"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        {/* Transfer Screen */}
        <Stack.Screen
          name="TransferScreen"
          component={TransferScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
