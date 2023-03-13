import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
});
export default function Hourly(): JSX.Element {
  return (
    <View className="bg-slate-600/40 m-3 rounded-2xl p-3">
      <Text className="text-white ">Tüm gün bulutlu hava bekleniyor.</Text>
      <View className="border-b-2 rounded-full mt-1 border-slate-500/50" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return (
            <>
              <View className="flex flex-row mx-1 p-2 " key={index}>
                <View className="flex flex-col items-center justify-center">
                  <Text className="text-white pb-1">0{item}:00</Text>
                  <Image
                    source={require('../assets/image/rain.png')}
                    style={styles.logo}
                  />
                  <Text className="text-white text-xl pl-2">10°</Text>
                </View>
              </View>
              <View className="border-r-2 border-slate-500/50 rounded-2xl  my-4" />
            </>
          );
        }, this)}
      </ScrollView>
    </View>
  );
}
