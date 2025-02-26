import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransferScreen from 'screens/TransferScreen';
import TabsNavigator from './TabsNavigator';
import ConfirmationScreen from 'screens/ConfirmationScreen';
import SuccessScreen from 'screens/SuccessScreen';

export type RootStackParamList = {
  TabsNavigator: undefined;
  TransferScreen: undefined;
  ConfirmationScreen: { amount: string; accountNumber: string };
  SuccessScreen: { amount: string; accountNumber: string };
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
        {/* Confirmation Screen */}
        <Stack.Screen
          name="ConfirmationScreen"
          component={ConfirmationScreen}
          options={{ headerShown: false }}
        />
        {/* Success Screen */}
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
