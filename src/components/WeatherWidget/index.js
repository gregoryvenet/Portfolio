import { useState, useEffect } from "react"
import { AlertGps } from "../Alert"
import axios from "axios"
import "./index.scss"

import clearSkyDay from "../../assets/icons/01d.svg"
import clearSkyNight from "../../assets/icons/01n.svg"
import fewCloudsDay from "../../assets/icons/02d.svg"
import fewCloudsNight from "../../assets/icons/02n.svg"
import scatteredClouds from "../../assets/icons/03dn.svg"
import brokenCloudsDay from "../../assets/icons/04d.svg"
import brokenCloudsNight from "../../assets/icons/04n.svg"
import showerRain from "../../assets/icons/09dn.svg"
import rainDay from "../../assets/icons/10d.svg"
import rainNight from "../../assets/icons/10n.svg"
import thunderstormDay from "../../assets/icons/11d.svg"
import thunderstormNight from "../../assets/icons/11n.svg"
import snowDay from "../../assets/icons/13d.svg"
import snowNight from "../../assets/icons/13n.svg"
import mistDay from "../../assets/icons/50d.svg"
import mistNight from "../../assets/icons/50n.svg"
import freezingRainDay from "../../assets/icons/freezingRaind.svg"
import freezingRainNight from "../../assets/icons/freezingRainn.svg"
import wind from "../../assets/icons/windsockdn.svg"
import thermoCelsius from "../../assets/icons/thermometerCelsiusdn.svg"
import humidity from "../../assets/icons/humiditydn.svg"

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
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric&lang=fr`
          )

          if (!response) {
            throw new Error(
              "Erreur lors de la récupération des données météorologiques"
            )
          }
          setWeatherData(response.data)
        } catch (error) {
          AlertGps()
        }
      }
    }

    fetchWeatherData()
  }, [location, apiKey])

  const getWeatherIcon = () => {
    const weatherId = weatherData.weather[0].id
    if (!weatherData) return console.log("ERREUR weatherDATA")
    const currentTime = new Date().getTime() / 1000
    const isDayTime =
      currentTime >= weatherData.sys.sunrise &&
      currentTime <= weatherData.sys.sunset
    //Orage 11j
    if (weatherId >= 200 && weatherId <= 232) {
      return isDayTime ? (
        <img src={thunderstormDay} alt="thunderstorm icon" />
      ) : (
        <img src={thunderstormNight} alt="thunderstorm icon" />
      )

      //Bruine 09j
    } else if (weatherId >= 300 && weatherId <= 321) {
      return <img src={showerRain} alt="shower rain icon" />
      //Pluie avec soleil/lune 10j
    } else if (weatherId >= 500 && weatherId <= 504) {
      return isDayTime ? (
        <img src={rainDay} alt="rain day icon" />
      ) : (
        <img src={rainNight} alt="rain night icon" />
      )

      //Pluie verglassante 13j
    } else if (weatherId === 511) {
      return isDayTime ? (
        <img src={freezingRainDay} alt="freezing rain day icon" />
      ) : (
        <img src={freezingRainNight} alt="freezing rain night icon" />
      )

      //Pluie gris total 09j
    } else if (weatherId >= 520 && weatherId <= 531) {
      return <img src={showerRain} alt="thunderstorm day icon" />
      //Neige 13j
    } else if (weatherId >= 600 && weatherId <= 622) {
      return isDayTime ? (
        <img src={snowDay} alt="snow day icon" />
      ) : (
        <img src={snowNight} alt="snow night icon" />
      )

      //Brume 50j
    } else if (weatherId >= 701 && weatherId <= 781) {
      return isDayTime ? (
        <img src={mistDay} alt="mist day icon" />
      ) : (
        <img src={mistNight} alt="mist night icon" />
      )

      //ciel clair 01dn
    } else if (weatherId === 800) {
      return isDayTime ? (
        <img src={clearSkyDay} alt="clear sky day icon" />
      ) : (
        <img src={clearSkyNight} alt="clear sky night icon" />
      )

      //Quelques Nuages 11-25 % 02dn
    } else if (weatherId === 801) {
      return isDayTime ? (
        <img src={fewCloudsDay} alt="few clouds day icon" />
      ) : (
        <img src={fewCloudsNight} alt="few clouds night icon" />
      )

      //nuages ​​dispersés : 25-50 % 03dn
    } else if (weatherId === 802) {
      return <img src={scatteredClouds} alt="scattered clouds icon" />
      //nuages ​​fragmentés : 51-84 % 04dn
    } else if (weatherId === 803 && weatherId === 804) {
      return isDayTime ? (
        <img src={brokenCloudsDay} alt="broken clouds day icon" />
      ) : (
        <img src={brokenCloudsNight} alt="broken clouds night icon" />
      )
    } else {
      return <p>Icone non disponible</p>
    }
  }

  return (
    <div className="weather-container">
      {weatherData && (
        <>
          <h3>{weatherData.name}</h3>
          <h4>{weatherData.weather[0].description}</h4>
          {getWeatherIcon()}
          <p>{weatherData.main.temp}°C</p>
          <div className="wind-container">
            <img src={wind} alt="" />
          <h4>{weatherData.wind.speed}km/h</h4></div>
          <div className="humidity-container">
            <img src={humidity} alt="humidity icon" />
            <h4>{weatherData.main.humidity}%</h4>
          </div>
        </>
      )}
    </div>
  )
}

export default WeatherWidget
