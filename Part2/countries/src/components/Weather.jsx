import { useEffect, useState } from 'react'
import axios from 'axios'


const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const WEATHER_KEY = import.meta.env.VITE_API_KEY

const Weather = ({ country }) => {
const [climate, setClimate] = useState(null)

  useEffect(() => {

    const [latitude, longitude] = country.capitalInfo.latlng

    const endpoint = `${WEATHER_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_KEY}`
    
    axios.get(endpoint).then((response) => setClimate(response.data))
  })

  if (!climate) {
    
    return null
  }

  const iconCode = climate.weather[0].icon
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

  return (

    <>
      <h2>Weather in {country.capital}</h2>
      <div>Temperature {climate.main.temp} Celsius</div>
      <img
        src={iconUrl}
        alt={`Weather icon of ${climate.weather[0].description}`}
      />
      <div>Wind {climate.wind.speed} m/s</div>
    </>
  )

}

export default Weather