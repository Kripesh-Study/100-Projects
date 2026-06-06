import React, { useState } from 'react'
import SideNav from "./components/SideNav"
import OverView from "./components/OverView"
import SevenDayForecast from "./components/SevenDayForecast"

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const fetchWeatherData = async (cityName) => {
    if (!cityName || !cityName.trim()) {
      setWeatherData(null)
      return
    }

    try {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${encodeURIComponent(cityName)}&days=7&aqi=yes&alerts=yes`
      const res = await fetch(url)
      const data = await res.json()

      if (!res.ok || data.error) {
        console.error('Weather API error:', data.error || data)
        setWeatherData(null)
        return
      }

      setWeatherData(data)
      console.log(data)
    } catch (error) {
      console.error('Fetch failed:', error)
      setWeatherData(null)
    }
  }

  return (
    <div className='flex p-5 gap-5 bg-gray-950 w-full h-screen '>
      <SideNav />
      <OverView fetchWeatherData={fetchWeatherData} weatherData={weatherData} />
      <SevenDayForecast weatherData={weatherData} />
    </div>
  )
};

export default App;