import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, Button, ScrollView, Image, ImageBackground } from 'react-native';
import { fetchAccount, fetchTransactions, fetchUsers } from '../utils/api';
import useStore from '../store/useStore';
import Header from 'components/Header';
import AccountCard from 'components/AccountCard';
import QuickActions from 'components/QuickActions';
import TransactionList from 'components/TransactionList';

// Definimos los tipos de las propiedades que recibe el hook
interface UseAccountDataProps {
  accountId: number;
  userId: number;
}

// Hook para obtener y almacenar los datos de la cuenta
const useAccountData = ({ accountId, userId }: UseAccountDataProps) => {
  const { setAccount, setTransactions, setUser, setLoading } = useStore();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Obtener datos del usuario
        const userResponse = await fetchUsers(userId);

        // Obtener la cuenta con el número correcto
        const accountResponse = await fetchAccount(accountId);
        const transactionsResponse = await fetchTransactions(accountId);

        // Asignar los datos al estado global
        setAccount(accountResponse);
        setTransactions(transactionsResponse);
        setUser(userResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [accountId, userId]);
};

const HomeScreen = () => {
  const { account, transactions, user, loading } = useStore();
  const accountId = 123456789;
  const userId = 1;

  //Llamo a la funcion para obtener los datos de la cuenta
  useAccountData({ accountId, userId });

  //Revisar si la cuenta esta cargando, si no hay cuenta o si hay un error
  if (loading) return <Text>Loading...</Text>;
  if (!account) return <Text>No account data found</Text>;
  if (!user) return <Text>No user data found</Text>;

  //Obtengo el primer nombre del usuario, si no hay nombre asigno "Usuario"
  const firstName = user?.full_name?.split(' ')[0] || 'Usuario';

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="light" />
      {/* Header */}
      <View className="absolute left-0 right-0 top-0">
        <Header />
        <View className="flex-col">
          <AccountCard />
          <QuickActions />
          <TransactionList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
