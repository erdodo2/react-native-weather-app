import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import moment from 'moment/moment';



export default function SunPosition(props): JSX.Element {
  const {weather} = props;
  const daily = weather.forecast.forecastday[0].astro;
  const [isDay, setIsDay] = React.useState(null);
  const [sunPosition, setSunPosition] = React.useState({
    sunrise: '',
    sunset: '',
  });
  const [moonPosition, setMoonPosition] = React.useState({
    moonrise: '',
    moonset: '',
  })
  const [lastTime, setLastTime] = React.useState(null);

  useEffect(() => {
    setSunPosition({
      sunrise:
        daily.sunrise.split(' ')[1] == 'AM'
          ? daily.sunrise.split(' ')[0]
          : daily.sunrise.split(' ')[1] + 12,
      sunset: (
        Number(daily.sunset.split(':')[0]) +
        12 +
        ':' +
        daily.sunset.split(':')[1]
      ).split(' ')[0],
    });
    setMoonPosition({
      moonrise:
        daily.moonrise.split(' ')[1] == 'AM'
          ? daily.moonrise.split(' ')[0]
          : daily.moonrise.split(' ')[1] + 12,
      moonset: (
        Number(daily.moonset.split(':')[0]) +
        12 +
        ':' +
        daily.moonset.split(':')[1]
      ).split(' ')[0],
    });

    moment().format('HH:mm') > sunPosition.sunrise &&
    moment().format('HH:mm') < sunPosition.sunset
      ? setIsDay(true)
      : setIsDay(false);

    if (moment().format('HH:mm') > sunPosition.sunrise) {
      setLastTime(moment().endOf('day').fromNow());
    } else {
      setLastTime(moment().startOf('day').fromNow());
    }
  }, [weather]);

  return (
    <>
      {isDay ? (
        <View className="bg-slate-600/40  rounded-2xl p-3 h-[200]">
          <Text className="text-white ">Sunrise</Text>
          <View className="border-b-2 rounded-full mt-1 border-slate-500/50" />

          <View className="flex flex-row justify-between  items-center h-[135]">
            <View className="flex flex-col justify-center items-center">
              <Text className="text-white text-center  ">
                {sunPosition.sunrise}
              </Text>
              <Text className="text-white text-center  ">Rise</Text>
            </View>
            <Image
              source={require('../assets/image/sun.png')}
              style={{width:60 , height: 60, objectFit: 'contain'}}
              className=" mt-2"
            />
            <View className="flex flex-col justify-center items-center">
              <Text className="text-white text-center  ">
                {sunPosition.sunset}

              </Text>
              <Text className="text-white text-center  ">Set</Text>
            </View>
          </View>
          <Text className="text-white text-sm text-center">{lastTime}</Text>
        </View>
      ) : (
        <View className="bg-slate-600/40  rounded-2xl p-3 h-[200]">
          <Text className="text-white ">Moonrise</Text>
          <View className="border-b-2 rounded-full mt-1 border-slate-500/50" />

          <View className="flex flex-row justify-between items-center h-[135]">
            <View className="flex flex-col justify-center items-center">
              <Text className="text-white text-center  ">
                {moonPosition.moonrise}
              </Text>
              <Text className="text-white text-center  ">Rise</Text>
            </View>
            <Image
              source={require('../assets/image/moon.png')}
              style={{width:60 , height: 60, objectFit: 'contain'}}
              className=" mt-2"
            />
            <View className="flex flex-col justify-center items-center">
              <Text className="text-white text-center  ">
                {moonPosition.moonset}
              </Text>
              <Text className="text-white text-center  ">Set</Text>
            </View>
          </View>
          <Text className="text-white text-sm text-center">{lastTime}</Text>
        </View>
      )}
    </>
  );
}
