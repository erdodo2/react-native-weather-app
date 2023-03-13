/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";


import Base from './views/Base';
import Hourly from './views/Hourly';
import Weekly from './views/Weekly';

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
});
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View className="bg-slate-800 ">
          <Base />
          <Hourly/>
          <Weekly/>
          <View className="flex flex-row ">
            <View className="basis-2/4  px-3">
              <View className="bg-slate-600/40  rounded-2xl p-3">
                <Text className="text-white ">UV İNDEKSİ</Text>
                <Text className="text-4xl text-white font-[300]">2</Text>
                <Text className="text-white text-xl">Düşük</Text>
                <Text className="text-white text-sm">Günün geri kalanında düşük.</Text>
              </View>
            </View>
            <View className="basis-2/4  px-3">
              <View className="bg-slate-600/40  rounded-2xl p-3">
                <Text className="text-white ">GÜN BATIMI</Text>
              </View>
            </View>
          </View>
          <View className="py-2 pt-4" >
            <Text className="flex justify-center text-center text-white">Created by Erdoğan Yeşil</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
