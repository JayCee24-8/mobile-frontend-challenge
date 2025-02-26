import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from '../store/useStore';
import { StackNavigationProp } from '@react-navigation/stack';

type ConfirmationScreenRouteProp = RouteProp<RootStackParamList, 'ConfirmationScreen'>;
type NavigationProps = StackNavigationProp<RootStackParamList, 'ConfirmationScreen'>;

const ConfirmationScreen = ({ route }: { route: ConfirmationScreenRouteProp }) => {
  const navigation = useNavigation<NavigationProps>();
  const { amount, accountNumber } = route.params;
  const { account, loading, setLoading } = useStore(); // ✅ Retrieve sender's account

  const handleConfirmTransaction = () => {
    navigation.navigate('SuccessScreen', {
      amount,
      accountNumber,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="mb-10 flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()} className="">
            <Image source={require('../assets/icons/atras.png')} />
          </TouchableOpacity>
          <Text className="absolute left-1/2 -translate-x-1/2 text-2xl">Confirma tu envío</Text>
        </View>

        {/* Icono */}
        <View className="mb-6 items-center">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <Image source={require('../assets/icons/telefono.png')} className="h-10 w-10" />
          </View>
        </View>

        {/* Cantidad */}
        <Text className="text-center text-lg text-gray-600">Total a enviar</Text>
        <Text className="my-3 text-center text-5xl font-semibold text-gray-900">
          {account?.currency === 'NIO' ? 'C$' : '$'} {parseFloat(amount).toLocaleString()}
        </Text>

        {/* Detalles de la Transaccion */}
        <View className="mt-14">
          <Text className=" text-xl font-semibold text-black">Al número de cuenta</Text>
          <Text className="text-lg text-[#67778F]">{accountNumber}</Text>
          <View className="my-3 border-b border-gray-300" />

          <Text className="my-1 text-xl font-semibold text-black">
            Cuenta a utilizar para el envío
          </Text>
          <Text className="text-lg text-[#67778F]">
            {account?.account_number ?? 'No disponible'}
          </Text>
          <View className="my-3 border-b border-gray-300" />
        </View>
      </ScrollView>

      {/* Boton de confirmacion */}
      <View className="border-gray-300 bg-white p-2">
        <TouchableOpacity
          onPress={handleConfirmTransaction}
          className="rounded-full bg-[#018765] p-4 text-center">
          <Text className="text-center text-xl font-bold text-white">Confirmar el envío</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
