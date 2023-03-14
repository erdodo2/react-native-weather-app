import { Text, View } from "react-native";
import React from "react";

export default function UVIndex(props): JSX.Element {
  const [uvIndex, setUvIndex] = React.useState(props.weather.current.uv);
  const [uvText, setUvText] = React.useState('');
  const [todayUvAvg, setTodayUvAvg] = React.useState("");
  React.useEffect(() => {
    if (uvIndex < 3) {
      setUvText('Low');
    } else if (uvIndex < 6) {
      setUvText('Moderate');
    }else if (uvIndex < 8) {
      setUvText('High');
    } else if (uvIndex < 11) {
      setUvText('Very High');
    } else {
      setUvText('Extreme');
    }
    let _todayUvAvg = 0;
    props.weather.forecast.forecastday[0].hour.forEach(hour => {
      _todayUvAvg += hour.uv;
    })
    _todayUvAvg /= 24;
    if(_todayUvAvg < 3) {
      setTodayUvAvg('Today is low UV index');
    } else if (_todayUvAvg < 6) {
      setTodayUvAvg('Today is moderate UV index');
    }else if (_todayUvAvg < 8) {
      setTodayUvAvg('Today is high UV index');
    } else if (_todayUvAvg < 11) {
      setTodayUvAvg('Today is very high UV index');
    }

  }, [props.weather]);
  return (
    <View className="bg-slate-600/40  rounded-2xl p-3 h-[200] flex flex-col justify-between">
      <View>
        <Text className="text-white ">UV INDEX</Text>
        <View className="border-b-2 rounded-full mt-1 border-slate-500/50 mb-2"  />
        <Text className="text-5xl text-white font-[300]">{uvIndex}</Text>
        <Text className="text-white text-2xl">{uvText}</Text>
      </View>

      <Text className="text-white ">
        {todayUvAvg}.
      </Text>
    </View>
  )
}
