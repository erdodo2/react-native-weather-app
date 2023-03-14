import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';

const styles = StyleSheet.create({
  logo: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
});
export default function Hourly(props): JSX.Element {
  const [hourList, setHourList] = React.useState([]);
  const [text, setText] = React.useState(props.weather.forecast.forecastday[0].day.condition.text);
  React.useEffect(() => {
    let hourList = props.weather.forecast.forecastday[0].hour;
    const timeNow = new Date().getHours();
    hourList = hourList.slice(timeNow, timeNow + 24);
    let tomorrowList = props.weather.forecast.forecastday[1].hour;
    tomorrowList = tomorrowList.slice(0, 24 - hourList.length);
    hourList = hourList.concat(tomorrowList);
    setHourList(hourList);
  }, [props.weather]);
  return (
    <View className="bg-slate-600/40 m-3 rounded-2xl p-3">
      <Text className="text-white ">{text}</Text>
      <View className="border-b-2 rounded-full mt-1 border-slate-500/50" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {hourList.map((hour, index) => {
          return (
            <>
              <View className="flex flex-row mx-1 p-2 ">
                <View className="flex flex-col items-center justify-center">
                  <Text className="text-white">
                    {moment(hour.time).format('HH:mm')}
                  </Text>
                  <Image
                    source={{uri: 'https:'+hour.condition.icon}}
                    style={styles.logo}
                    className="my-2"
                  />
                  <Text className="text-white text-xl pl-2 font-[700]">{hour.temp_c}°</Text>
                </View>
              </View>
              <View className="border-r-2 border-slate-500/10 rounded-2xl  my-4" />
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}
