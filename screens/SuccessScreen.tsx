import React from 'react';
import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/index';
import useStore from 'store/useStore';

type NavigationProps = StackNavigationProp<RootStackParamList, 'SuccessScreen'>;
type SuccessScreenRouteProp = RouteProp<RootStackParamList, 'SuccessScreen'>;

const SuccessScreen = ({ route }: { route: SuccessScreenRouteProp }) => {
  const navigation = useNavigation<NavigationProps>();
  const { amount, accountNumber } = route.params;
  const { account } = useStore();

  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedTime = currentDate.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const handleReturnHome = () => {
    // Navegar de vuelta al Inicio(`TabsNavigator`)
    navigation.navigate('TabsNavigator');
  };

  return (
    <View className="w-full flex-1 bg-white">
      <ScrollView className="w-full flex-1">
        {/* Background gradiente */}
        <ImageBackground
          source={require('../assets/images/Gradient.png')}
          className="h-40 w-full"
          resizeMode="cover"
        />
        {/* Icono de Check */}
        <View className="-mt-12 items-center">
          <View className="h-24 w-24 items-center justify-center rounded-full bg-white">
            <View className="h-20 w-20 items-center justify-center rounded-full bg-[#33BA75]">
              <Image source={require('../assets/icons/check.png')} className="h-10 w-10" />
            </View>
          </View>
        </View>

        {/* ✅ Success Message */}
        <View className="mt-8 items-center">
          <Text className="text-4xl font-semibold text-gray-900">Envío con éxito</Text>
          <Text className="text-gray-500">
            {formattedDate}, {formattedTime}
          </Text>
        </View>
        <View className="mt-8 border-b border-gray-300" />

        {/* ✅ Transaction Summary */}
        <View className="mx-6 mt-6 items-center justify-center p-4">
          <Text className="text-xl font-semibold text-gray-600">Resumen de tu envío</Text>

          <Text className="mb-1 mt-6 text-lg text-gray-600">Total enviado</Text>
          <Text className="text-xl text-black">
            {account?.currency === 'NIO' ? 'C$' : '$'}
            {parseFloat(amount).toLocaleString()}
          </Text>

          <Text className="mb-1 mt-6 text-lg text-gray-600">Al número de cuenta</Text>
          <Text className="text-xl text-black">{accountNumber}</Text>

          <Text className="mb-1 mt-6 text-lg text-gray-600">Cuenta utilizada para el envio</Text>
          <Text className="text-xl text-black">{account?.account_number}</Text>
        </View>
      </ScrollView>

      {/* Boton de regreso a Inicio */}
      <View className="border-gray-300 bg-white px-10 pb-16">
        <TouchableOpacity
          onPress={handleReturnHome}
          className="rounded-full bg-[#018765] p-4 text-center">
          <Text className="text-center text-xl font-bold text-white">Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessScreen;
