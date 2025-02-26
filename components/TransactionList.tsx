import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import useStore from '../store/useStore';

const TransactionList = () => {
  const { transactions } = useStore();

  return (
    <View className="mx-7 mt-2 bg-white p-4">
      {/* Lista de Transacciones */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.transaction_number}
        renderItem={({ item }) => (
          <View className="flex-row items-center justify-between border-b border-gray-200 py-2">
            {/* Transaction Icon */}
            <Image
              className={`h-12 w-12 ${item.transaction_type === 'Credit' ? '' : 'color-red-300'}`}
              source={require('../assets/icons/deposito.png')}
            />

            {/* Transaction Details */}
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold text-gray-700">{item.description}</Text>
              <Text className="text-base text-gray-500">{item.bank_description}</Text>
            </View>

            {/* Transaction Amount */}
            <Text
              className={`text-lg font-semibold ${
                item.transaction_type === 'Credit' ? 'text-green-600' : 'text-red-600'
              }`}>
              {item.amount.currency} {item.amount.value.toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default TransactionList;
