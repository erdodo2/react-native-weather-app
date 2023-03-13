import {Image, Text, View, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
    objectFit: 'contain',
  },
});
export default function Base(): JSX.Element {
  return (
    <View className="flex p-[30]  items-center justify-center ">
      <Text className="text-white text-2xl">Kütahya Merkez</Text>
      <Text className="text-white text-8xl pl-5 pt-3 font-[100]">10°</Text>
      <Image source={require('../assets/image/rain.png')} style={styles.logo} />
      <Text className="text-white text-xl">D:0° Y:4°</Text>
    </View>
  );
}
