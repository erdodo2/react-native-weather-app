import { Image, StyleSheet, Text, View } from "react-native";
import React,{useEffect,useState} from "react";
import moment from "moment";

const styles = StyleSheet.create({
  logo: {
    width: 45,
    height: 35,
  },
});
export default function Weekly(props): JSX.Element {
  const [weakList, setWeakList] = useState([]);
  useEffect(() => {
    setWeakList(props.weather.forecast.forecastday);
    
  }, [props.weather]);
  return (
    <View className="bg-slate-600/40 m-3 rounded-2xl p-3">
      <Text className="text-white">10 day forecast.</Text>
      <View className="border-b-2 rounded-full mt-1 border-slate-500/50"></View>
      {weakList.map((item, index) => {
        return (
          <>
            <View className="flex flex-col mx-1 p-2 " key={index}>
              <View className="flex flex-row items-center justify-between">
                <Text className="text-white pb-1">{moment(item.date).format("DD MMMM")}</Text>
                <Image source={{uri:("https:" + item.day.condition.icon) }} style={styles.logo}/>
                <Text className="text-white ">D:{item.day.mintemp_c}° / Y:{item.day.maxtemp_c}°</Text>
              </View>
            </View>
            {weakList.length-1 != index && <View className="border-b-2 border-slate-500/10 rounded-2xl  " ></View>}
          </>
        )
      }, this)}
    </View>
  );
}
