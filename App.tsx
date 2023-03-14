/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Image,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TextInput,
} from 'react-native';

import Base from './views/Base';
import Hourly from './views/Hourly';
import Weekly from './views/Weekly';
import UVIndex from './views/UVIndex';
import SunPosition from './views/SunPosition';
import Wind from './views/Wind';
import Precipitation from './views/Precipitation';
import Felt from './views/Felt';

import Weather from './requests/Weather';
import weatherJson from './requests/weather.json';

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
});
function App(): JSX.Element {
  const [weather, setWeather] = React.useState(weatherJson);
  const [cityText, setCityText] = React.useState('Kütahya');
  const [city, setCity] = React.useState(cityText);
  useEffect(() => {
    Weather(city).then(data => {
      console.log(data);
      if (data.error == undefined) {
        setWeather(data);
      } else {
        console.log(data.error);
        Alert.alert('Not found', 'City not founded', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
    });
  }, [city]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    Weather(city).then(data => {
      setWeather(data);
      setRefreshing(false);
    });
  }, []);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View className="bg-slate-800 ">
          <View className="flex flex-row justify-between items-center p-3">
            <Text className="text-white text-2xl font-bold">Weather</Text>
            <TextInput
              className="bg-slate-600/40 rounded p-2 text-white border-2 border-slate-500/50 w-[130]"
              onChangeText={text => {
                setCityText(text);
              }}
              onSubmitEditing={() => {
                setCity(cityText);
              }}
              value={cityText}
            />
          </View>
          <Base weather={weather} />
          <Hourly weather={weather} />
          <Weekly weather={weather} />
          <View className="flex flex-row  flex-wrap">
            <View className="basis-2/4  px-3">
              <UVIndex weather={weather} />
            </View>
            <View className="basis-2/4  px-3">
              <SunPosition weather={weather} />
            </View>
            <View className="basis-4/1 w-full px-3">
              <Wind weather={weather} />
            </View>
            <View className="basis-2/4 w-full px-3">
              <Precipitation weather={weather} />
            </View>
            <View className="basis-2/4 w-full px-3">
              <Felt weather={weather} />
            </View>
          </View>

          <View className="py-2 pt-4">
            <Text className="flex justify-center text-center text-white">
              Created by Erdoğan Yeşil
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
