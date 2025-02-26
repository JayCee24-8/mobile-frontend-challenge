import { create } from "zustand";

// Definimos la interfaz para la cuenta del usuario
interface Account {
  alias: string;            // Nombre de la cuenta (Ej: "Cuenta de ahorro")
  account_number: number;   // Número de cuenta del usuario
  balance: number;          // Saldo disponible en la cuenta
  currency: string;         // Moneda en la que se maneja la cuenta (Ej: "NIO")
}

// Definimos la interfaz para las transacciones
interface Transaction {
  transaction_number: string;  // Número de la transacción
  amount: {
    currency: string;          // Moneda en la que se realizó la transacción
    value: number;             // Monto de la transacción
  };
  description: string;         // Descripción de la transacción
  bank_description: string;    // Banco asociado a la transacción
  transaction_type: string;    // Tipo de transacción (Ej: "Credit" o "Debit")
  origin: string;              // Cuenta de origen
  destination: string;         // Cuenta de destino
}

// Definimos la interfaz para el usuario
interface User {
  full_name: string;       // Nombre completo del usuario
  profile_photo: string;   // URL de la foto de perfil
  products: {              // Lista de productos que tiene el usuario
    type: string;          // Tipo de producto (Ej: "Account")
    id: string;            // ID del producto (Número de cuenta)
  }[];
}

// Definimos la interfaz para el estado global de la aplicación
interface StoreState {
  account: Account | null;        // Datos de la cuenta del usuario
  transactions: Transaction[];    // Lista de transacciones de la cuenta
  user: User | null;              // Información del usuario
  loading: boolean;               // Estado de carga (true mientras se obtiene la información)

  // Métodos para actualizar el estado global
  setAccount: (account: Account) => void;
  setTransactions: (transactions: Transaction[]) => void;
  setUser: (user: User) => void;
  setLoading: (loading: boolean) => void;
  //addTransaction: (transaction: Transaction) => void;
}

// Creamos el store global con Zustand
const useStore = create<StoreState>((set) => ({
  account: null,
  transactions: [],
  user: null,
  loading: false,

  // Métodos para actualizar los datos en el store
  setAccount: (account) => set({ account }),
  setTransactions: (transactions) => set({ transactions }),
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  //addTransaction: (transaction) => set((state) => ({transactions: [transaction, ...state.transactions]})) // Pusheamos la nueva transaccion
}));

export default useStore;
