import {Image, Text, View, StyleSheet} from 'react-native';
import React, { useEffect } from "react";

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 40,
    lineHeight: 40,
  },
});
export default function Base(props): JSX.Element {
  const [temp_c, setTemp_c] = React.useState(props.weather.current.temp_c);
  const [icon, setIcon] = React.useState(props.weather.current.condition.icon);
  const [minTemp_c, setMinTemp_c] = React.useState(props.weather.forecast.forecastday[0].day.mintemp_c);
  const [maxTemp_c, setMaxTemp_c] = React.useState(props.weather.forecast.forecastday[0].day.maxtemp_c);
  const [condition, setCondition] = React.useState(props.weather.current.condition.text);
  const [city, setCity] = React.useState(props.weather.location.name);

  useEffect(() => {
    setTemp_c(props.weather.current.temp_c);
    setIcon(props.weather.current.condition.icon);
    setMinTemp_c(props.weather.forecast.forecastday[0].day.mintemp_c);
    setMaxTemp_c(props.weather.forecast.forecastday[0].day.maxtemp_c);
    setCondition(props.weather.current.condition.text);
    setCity(props.weather.location.name);
  }, [props.weather]);
  return (
    <View className="flex p-[50]  items-center justify-center ">
      <Text className="text-white text-2xl ">{city}</Text>
      <Text className="text-white  pl-5 pt-3 text-8xl font-[200]"  >
        {temp_c}°
      </Text>
      <Text className="text-white text-xl">{condition}</Text>
      <Text className="text-white text-xl">
        D:{minTemp_c}°  Y:{maxTemp_c}°
      </Text>
    </View>
  );
}
