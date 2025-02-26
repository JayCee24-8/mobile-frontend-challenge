# Prueba Técnica: Aplicación de Transferencias Bancarias

Este proyecto es un mockup de una aplicación móvil desarrollada con **React Native y Expo**, que permite a los usuarios gestionar sus cuentas bancarias, realizar transferencias y visualizar su historial de transacciones.

## Características

- **Visualización de saldo y cuentas bancarias**
- **Transferencias entre cuentas**
- **Historial de transacciones** detallado
- **Interfaz moderna y responsiva** inspirada en diseños de Figma

---

## 📂 Estructura del Proyecto

```
📂 mobile-frontend-challenge
 ┣ 📂 assets               # Imágenes e iconos
 ┣ 📂 components           # Componentes reutilizables
 ┣ 📂 navigation           # Configuración de navegación
 ┣ 📂 screens              # Pantallas principales de la app
 ┣ 📂 store                # Estado global con Zustand
 ┣ 📂 utils                # Funciones auxiliares y llamadas a API
 ┣ 📜 App.tsx              # Punto de entrada principal
 ┣ 📜 README.md            # Documentación del proyecto
 ┣ 📜 package.json         # Dependencias y scripts
 ┣ 📜 tailwind.config.js   # Configuración de NativeWind
```

---

##  Instalación y Configuración

1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/JayCee24'8/mobile-frontend-challenge.git
   cd mobile-frontend-challenge
   ```
2. **Instalar dependencias**
   ```sh
   npm install
   ```
3. **Configurar React Navigation (NativeWind se encuentra configurado en su totalidad, ya que se usó un template expo-stack para asegurar máxima compatibilidad)*
   ```sh
   npx expo install react-native-gesture-handler react-native-screens react-native-safe-area-context react-native-reanimated react-native-vector-icons @react-navigation/native
   ```
4. **Iniciar la aplicación**
   
   ```sh
   npm run start
   ```

---

## Tecnologías Utilizadas

- **React Native**
- **Expo**
- **Zustand** (manejo de estado global)
- **NativeWind**
- **React Navigation**
- **Axios**

---

## Navegación y Pantallas

1. **Inicio** - Muestra saldo y cuentas del usuario. Del mismo modo muestra una navegación por tabs para trabajar en un futuro la pantalla de Operaciones y Productos.
2. **Transferencias** - Formulario para enviar dinero entre cuentas. Este se accede mediante el botón "Transferir Dinero" mostrado en la lista de Opciones Rápidas.
3. **Confirmación** - Resumen antes de finalizar una transferencia.
4. **Éxito** - Mensaje de confirmación y detalles de la transacción.
5. **Historial** - Lista de transacciones realizadas.

---

