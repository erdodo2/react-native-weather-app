import { Text, View } from "react-native";
import React from "react";

export default function Felt(props): JSX.Element {
  return (
    <View className="bg-slate-600/40  rounded-2xl mt-3 p-3 h-[200] ">
      <View className="border-b  pb-2 border-gray-500">
        <Text className="text-white">Felt</Text>
      </View>
      <View className="flex flex-col justify-between h-[150]">
        <Text className="mt-2 text-white text-4xl">1°C</Text>
        <Text className="text-white" style={{fontSize:12}}>Viewing Distance: 10km</Text>
      </View>



    </View>
  )
}
