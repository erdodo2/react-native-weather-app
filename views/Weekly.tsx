import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
});
export default function Weekly(): JSX.Element {
  return (
    <View className="bg-slate-600/40 m-3 rounded-2xl p-3">
      <Text className="text-white">10 günlük tahmin.</Text>
      <View className="border-b-2 rounded-full mt-1 border-slate-500/50"></View>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
        return (
          <View className="flex flex-col mx-1 p-2 " key={index}>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-white pb-1">{item}. Gün</Text>
              <Image source={require('../assets/image/rain.png')} style={styles.logo}/>
              <Text className="text-white text-lg pl-2">D:10° / Y:20°</Text>
            </View>
          </View>
        )
      }, this)}
    </View>
  );
}
