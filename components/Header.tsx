import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import useStore from '../store/useStore';

const Header = () => {
  const { user } = useStore();
  const firstName = user?.full_name?.split(' ')[0] || 'Usuario';

  return (
    <View className="relative h-[293px] w-full">
      {/*Green Overlay*/}
      <ImageBackground
        source={require('../assets/images/Background.jpeg')}
        className="h-full w-full justify-between p-6 "
        resizeMode="cover">
        <View className="absolute bottom-0 left-0 right-0 top-0 bg-green-800 opacity-70" />

        {/* Saludos y Foto de Perfil */}
        <View className="mt-[54px] flex-row items-center justify-between">
          <View className="flex-row items-center space-x-3">
            <Image source={require('../assets/icons/LAFISE.png')} className="h-8 w-8" />
            <Text className="ml-3 text-[16px] text-white">Hola, {firstName}</Text>
          </View>
          <Image
            source={{ uri: user?.profile_photo }}
            className="h-10 w-10 rounded-full border-2 border-white"
          />
        </View>

        {/* Titulo: Mis Productos */}
        <View className="justify-left absolute bottom-[120px] left-6 mb-2  flex-row items-center">
          <Text className="text-xl font-semibold text-white">Mis productos</Text>
          <TouchableOpacity>
            <Image source={require('../assets/icons/Eye.png')} className="ml-3 h-6 w-6" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;
