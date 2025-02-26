import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStore from 'store/useStore';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';

// Asignar tipo a NavigationProps
type NavigationProps = StackNavigationProp<RootStackParamList, 'TransferScreen'>;

const TransferScreen = () => {
  //Pasar los props que seran utilizados por la pantalla de confirmacion
  const navigation = useNavigation<NavigationProps>();
  const handleProceed = () => {
    navigation.navigate('ConfirmationScreen', {
      amount,
      accountNumber,
    });
  };

  const { account } = useStore();
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  let numericAmount = parseFloat(amount) || 0;
  let isAmountValid = numericAmount > 0 && numericAmount <= (account?.balance || 0);

  // El boton no estara activo a menos que se llenen los campos
  const isDisabled = !accountNumber || !isAmountValid;

  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      <ScrollView className="flex-1">
        <StatusBar style="dark" />
        {/* Header */}
        <View className="mb-10 flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()} className="">
            <Image source={require('../assets/icons/atras.png')} />
          </TouchableOpacity>
          <Text className="absolute left-1/2 -translate-x-1/2 text-2xl">Transferir dinero</Text>
        </View>

        {/* Titulo */}
        <Text className="mb-6 text-center text-2xl font-semibold text-black">
          ¿A quién le enviarás dinero hoy?
        </Text>

        {/* Input para Numero de Cuenta */}
        <Text className="text-black">Ingresa el número de cuenta</Text>
        <View className="relative">
          <TextInput
            className="mb-4 mt-2 w-full rounded-lg border border-gray-300 p-4 text-black"
            placeholder="N. de cuenta"
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="numeric"
          />
          {accountNumber.length > 0 && (
            <TouchableOpacity
              onPress={() => setAccountNumber('')}
              className="absolute right-4 top-1/2 -translate-y-1/2">
              <Image className="h-5 w-5 opacity-80" source={require('../assets/icons/lapiz.png')} />
            </TouchableOpacity>
          )}
        </View>

        {/* Input para Cantidad */}
        <Text className="text-black">¿Cuánto dinero le enviarás?</Text>
        <View className="w-full">
          <TextInput
            className="mb-6 mt-2 w-full rounded-lg border border-gray-300 p-4 text-black"
            placeholder="C$500"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          {amount.length > 0 && (
            <TouchableOpacity
              onPress={() => setAmount('')}
              className="absolute right-4 top-1/2 -translate-y-1/2">
              <Image source={require('../assets/icons/lapiz.png')} className="h-6 w-6 opacity-60" />
            </TouchableOpacity>
          )}
        </View>

        <Text className={`${isAmountValid ? 'text-white' : 'text-red-500'}`}>
          No se puede transferir. Saldo insuficiente
        </Text>
      </ScrollView>
      {/* Boton de Envio */}
      <View className="border-gray-300 bg-white p-2">
        <TouchableOpacity
          disabled={isDisabled}
          onPress={handleProceed}
          className={`rounded-full p-4 text-center ${isDisabled ? 'bg-gray-300' : 'bg-[#018765]'}`}>
          <Text className="text-center text-xl font-bold text-white">Enviar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TransferScreen;
