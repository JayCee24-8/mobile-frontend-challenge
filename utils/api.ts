import axios from 'axios';

// Definimos la interfaz para la cuenta del usuario
interface Account {
  alias: string; // Nombre de la cuenta (Ej: "Cuenta de ahorro")
  account_number: number; // Número de cuenta
  balance: number; // Saldo de la cuenta
  currency: string; // Moneda en la que opera la cuenta (Ej: "NIO")
}

// Definimos la interfaz para las transacciones
interface Transaction {
  transaction_number: string; // Número de la transacción
  description: string; // Descripción de la transacción
  bank_description: string; // Nombre del banco asociado
  transaction_type: string; // Tipo de transacción (Ej: "Credit" o "Debit")
  amount: {
    //Informacion del monto
    currency: string;
    value: number;
  };
  origin: string; // Cuenta de origen
  destination: string; // Cuenta de destino
}

// Definimos la interfaz para el usuario
interface User {
  full_name: string; // Nombre completo del usuario
  profile_photo: string; // URL de la foto de perfil
  products: {
    // Lista de productos que tiene el usuario
    type: string; // Tipo de producto (Ej: "Cuenta de ahorros")
    id: string; // ID del producto (Número de cuenta)
  }[];
}

// Inicializamos la instancia de axios
export const api = axios.create({
  baseURL: 'http://192.168.1.47:5566', // Utilizar la IP de la máquina donde corre el backend
});

// Obtener los datos de la cuenta
export const fetchAccount = async (accountNumber: number): Promise<Account> => {
  try {
    const response = await api.get<Account>(`/accounts/${accountNumber}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching account:', error);
    throw new Error('Failed to fetch account data.');
  }
};

// Obtener las transacciones
export const fetchTransactions = async (accountNumber: number): Promise<Transaction[]> => {
  try {
    const response = await api.get<{ items: Transaction[] }>(
      `/accounts/${accountNumber}/transactions`
    );
    return response.data.items; //  Solo extraemos `items`, ya que la API devuelve una lista dentro de `items`
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw new Error('Failed to fetch transaction data.');
  }
};

// Obtener la información del usuario
export const fetchUsers = async (userId: number): Promise<User> => {
  try {
    const response = await api.get<User>(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data.');
  }
};
