// WeatherWidget/index.js
import { useState, useEffect } from "react"
import { AlertGps } from "../Alert"
import "./index.scss"

const WeatherWidget = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const [weatherData, setWeatherData] = useState(null)
  const [location, setLocation] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
    } else {
      AlertGps()
    }
  }, [])

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric&lang=fr`
          )
          if (!response.ok) {
            throw new Error(
              "Erreur lors de la récupération des données météorologiques"
            )
          }
          const data = await response.json()
          setWeatherData(data)
        } catch (error) {
          console.error(error)
        }
      }
    }

    fetchWeatherData()
  }, [location, apiKey])

  const getWeatherIcon = (weatherId) => {
    if (weatherId >= 200 && weatherId <= 232) {
      return "../../assets/icons/thunderstorms.svg"
    } else if (weatherId >= 300 && weatherId <= 321) {
      return "../../assets/icons/drizzle.svg"
    } else if (weatherId >= 500 && weatherId <= 504) {
      return "../../assets/icons/rain.svg"
    } else if (weatherId === 511) {
      return "../../assets/icons/smoke.svg"
    } else if (weatherId >= 520 && weatherId <= 531) {
      return "../../assets/icons/showers.svg"
    } else if (weatherId >= 600 && weatherId <= 622) {
      return "../../assets/icons/snow.svg"
    } else if (weatherId >= 701 && weatherId <= 781) {
      return "../../assets/icons/fog.svg"
    } else if (weatherId === 800) {
      return "../../assets/icons/clear-day.svg"
    } else if (weatherId === 801) {
      return "../../assets/icons/partly-cloudy-day.svg"
    } else if (weatherId >= 802 && weatherId <= 804) {
      return "../../assets/icons/cloudy.svg"
    } else {
      return "../../assets/icons/clear-day.svg"
    }
  }

  return (
    <div>
      {weatherData ? (
        <div>
          <h1>{weatherData.name}</h1>
          <img
            src={getWeatherIcon(weatherData.weather[0].id)}
            alt="Weather icon"
            className="weather-icon"
          />
          <h2>{weatherData.weather[0].description}</h2>
          <h3>{weatherData.main.temp}°C</h3>
        </div>
      ) : (
        <p>Chargement des données météorologiques...</p>
      )}
    </div>
  )
}

export default WeatherWidget
