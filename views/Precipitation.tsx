import { Text, View } from "react-native";
import React from "react";

export default function Precipitation(props): JSX.Element {
  const [rain, setRain] = React.useState(props.weather.forecast.forecastday[0].day.totalprecip_mm);
  const [humidity, setHumidity] = React.useState(props.weather.current.humidity);
  const [rainProbability, setRainProbability] = React.useState(props.weather.forecast.forecastday[0].day.daily_chance_of_rain);
  const [snowProbability, setSnowProbability] = React.useState(props.weather.forecast.forecastday[0].day.daily_chance_of_snow);
  return (
    <View className="bg-slate-600/40  rounded-2xl mt-3 p-3 h-[200] ">
      <View className="border-b  pb-2 border-gray-500">
        <Text className="text-white">Precipitation</Text>
      </View>

      <View>
        <Text className="text-white text-4xl mt-2">{rain}mm</Text>
        <Text className="text-white  mt-1">Humidity: %{humidity}</Text>
      </View>
      <View className="mt-10">
        <Text className="text-white  mt-1" style={{fontSize:13}}>Rain Probability: %{rainProbability}</Text>
        <Text className="text-white mt-1" style={{fontSize:13}}>Snow Probability: %{snowProbability}</Text>
      </View>


    </View>
  )
}
