
export default async function Weather(city) {

  const key = '486770da27244a32820131529231303';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=10&aqi=yes&alerts=yes`;
   return await fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}
