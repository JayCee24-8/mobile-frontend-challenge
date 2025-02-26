import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import useStore from '../store/useStore';

const AccountCard = () => {
  const { account } = useStore();
  const formattedBalance = account?.balance?.toFixed(2);

  return (
    <View className="w-100 mx-10 -mt-[100px] h-[160px] rounded-xl bg-white p-6 shadow-sm">
      {/* Tipo de Cuenta */}
      <View className="flex-row justify-between">
        <View>
          <Text className="text-lg font-semibold text-gray-600">
            {account?.alias || 'Cuenta de ahorro'}
          </Text>

          {/* Numero de cuenta */}
          <Text className="text-lg text-gray-400">{account?.account_number}</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/icons/navegador.png')} />
        </TouchableOpacity>
      </View>

      {/* Balance */}
      <Text className="mt-7 text-gray-400">Saldo disponible</Text>
      <View className="mt-2 flex-row items-center justify-between">
        <View className="flex-row items-center justify-between gap-2">
          <Text className="text-sm text-gray-500">{account?.currency}</Text>
          <Text className="text-2xl font-semibold text-gray-800">{formattedBalance}</Text>
        </View>
      </View>
    </View>
  );
};

export default AccountCard;
