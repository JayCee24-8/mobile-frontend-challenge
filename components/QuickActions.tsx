import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';
import { useNavigation } from '@react-navigation/native';

type NavigationProps = StackNavigationProp<RootStackParamList, 'TransferScreen'>;

const QuickActions = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View className="w-100 mx-10 my-4 h-48 rounded-xl bg-white p-4 shadow-sm">
      {/* Titulo */}
      <Text className="mb-4 text-2xl font-semibold text-gray-800">Operaciones rápidas</Text>

      {/* Botones de Operaciones Rapidas */}
      <View className="flex-row justify-evenly">
        {/* Transferir Dinero */}
        <View className="mx-2 flex-1 flex-col items-center">
          <TouchableOpacity
            className="h-16 w-16 items-center justify-center rounded-lg bg-[#E6F3F0]"
            onPress={() => navigation.navigate('TransferScreen')}>
            <Image source={require('../assets/icons/transferir.png')} className="mb-2 h-8 w-8" />
          </TouchableOpacity>
          <Text className=" mt-2 text-center text-sm text-gray-700">Transferir Dinero</Text>
        </View>

        {/* Pagar Servicio */}
        <View className="mx-2 flex-1 flex-col items-center">
          <TouchableOpacity className="h-16 w-16 items-center justify-center rounded-lg bg-[#FFF3E9]">
            <Image source={require('../assets/icons/bombillo.png')} className="mb-2 h-8 w-8" />
          </TouchableOpacity>
          <Text className="mt-2 text-center text-sm text-gray-700">Pagar Servicio</Text>
        </View>

        {/* Recargar Celular */}
        <View className="mx-2 flex-1 flex-col items-center">
          <TouchableOpacity className="h-16 w-16 items-center justify-center rounded-lg bg-[#E6F7FD]">
            <Image source={require('../assets/icons/telefono.png')} className="mb-2 h-8 w-8" />
          </TouchableOpacity>
          <Text className="mt-2 text-center text-sm text-gray-700">Recargar celular</Text>
        </View>

        {/* Retiro Sin Tarjeta */}
        <View className="mx-2 flex-1 flex-col items-center">
          <TouchableOpacity className="h-16 w-16 items-center justify-center rounded-lg bg-[##EAE6F3]">
            <Image source={require('../assets/icons/retirar.png')} className="mb-2 h-8 w-8" />
          </TouchableOpacity>
          <Text className="mt-2 text-center text-sm text-gray-700">Retiro sin tarjeta</Text>
        </View>
      </View>

      {/* Row 2 */}
      <View className="mt-4 flex-row justify-between"></View>
    </View>
  );
};

export default QuickActions;
