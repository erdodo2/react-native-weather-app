import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

export default function Header({weather}): JSX.Element {
  const arrow = StyleSheet.create({
    arrow: {
      width: 0,
      height: 0,
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderBottomWidth: 20,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'red',
      transform: [{rotate: '180deg'}],
      position: 'absolute',
      top: 0,
      left: 70,

    },
  });
  const [wind, setWind] = React.useState({
    N: {
      degree: 0,
      direction: 'North',
    },
    NNE: {
      degree: 22.5,
      direction: 'North NorthEast',
    },
    NE: {
      degree: 45,
      direction: 'NorthEast',
    },
    ENE: {
      degree: 67.5,
      direction: 'East NorthEast',
    },
    E: {
      degree: 90,
      direction: 'East',
    },
    ESE: {
      degree: 112.5,
      direction: 'East SouthEast',
    },
    SE: {
      degree: 135,
      direction: 'SouthEast',
    },
    SSE: {
      degree: 157.5,
      direction: 'South SouthEast',
    },
    S: {
      degree: 180,
      direction: 'South',
    },
    SSW: {
      degree: 202.5,
      direction: 'South SouthWest',
    },
    SW: {
      degree: 225,
      direction: 'SouthWest',
    },
    WSW: {
      degree: 247.5,
      direction: 'West SouthWest',
    },
    W: {
      degree: 270,
      direction: 'West',
    },
    WNW: {
      degree: 292.5,
      direction: 'West NorthWest',
    },
    NW: {
      degree: 315,
      direction: 'NorthWest',
    },
    NNW: {
      degree: 337.5,
      direction: 'North NorthWest',
    },
  });
  return (
    <View className="bg-slate-600/40 mt-3 rounded-2xl p-3 h-[225] ">
      <View className="border-b  pb-2 border-gray-500">
        <Text className="text-white">Wind</Text>
      </View>
      <View className="flex flex-row items-center justify-between pt-3">
        <View>
          <Text className="text-4xl font-extralight text-white">
            {weather.current.wind_kph} km/s
          </Text>
          <Text className="text-white text-lg">
            {wind[weather.current.wind_dir].direction}
          </Text>
          <Text className="text-white text-lg">
            {wind[weather.current.wind_dir].degree}°
          </Text>
          <Text className="text-white text-lg">{weather.current.wind_dir}</Text>
        </View>
        <View className="bg-white/20 rounded-2xl">
          <View style={arrow.arrow}/>
          <Image
            className="h-[160] w-[160]"
            style={{
              transform:
                'rotate(' + wind[weather.current.wind_dir].degree * -1 + 'deg)',
            }}
            source={require('../assets/image/compass.png')}
          />
        </View>
      </View>
    </View>
  );
}
