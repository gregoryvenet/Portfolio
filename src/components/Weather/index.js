import { useState, useEffect } from "react"
import { AlertGps } from "../Alert"
import axios from "axios"
import "./index.scss"
import brokenCloudsDay from "../../assets/icons/brokenCloudsDay.svg"
import brokenCloudsNight from "../../assets/icons/brokenCloudsNight.svg"
import clearSkyDay from "../../assets/icons/clearSkyDay.svg"
import clearSkyNight from "../../assets/icons/clearSkyNight.svg"
import fewCloudsDay from "../../assets/icons/fewCloudsDay.svg"
import fewCloudsNight from "../../assets/icons/fewCloudsNight.svg"
import freezingRainDay from "../../assets/icons/freezingRainDay.svg"
import freezingRainNight from "../../assets/icons/freezingRainNight.svg"
import humidity from "../../assets/icons/humidity.svg"
import mistDay from "../../assets/icons/mistDay.svg"
import mistNight from "../../assets/icons/mistNight.svg"
import rainDay from "../../assets/icons/rainDay.svg"
import rainNight from "../../assets/icons/rainNight.svg"
import scatteredClouds from "../../assets/icons/scatteredClouds.svg"
import showerRain from "../../assets/icons/showerRain.svg"
import snowDay from "../../assets/icons/snowDay.svg"
import snowNight from "../../assets/icons/snowNight.svg"
import thermoCelsius from "../../assets/icons/thermoCelsius.svg"
import thunderstormDay from "../../assets/icons/thunderstormDay.svg"
import thunderstormNight from "../../assets/icons/thunderstormNight.svg"
import wind from "../../assets/icons/wind.svg"

const Weather = () => {
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
    if (!weatherData) return;

    const weatherId = weatherData.weather[0].id
    const currentTime = new Date().getTime() / 1000
    const isDayTime =
    currentTime >= weatherData.sys.sunrise &&
    currentTime <= weatherData.sys.sunset

    const iconMapping = {
      thunderstorm: isDayTime ? thunderstormDay : thunderstormNight,
      showerRain: showerRain,
      rain: isDayTime ? rainDay : rainNight,
      freezingRain: isDayTime ? freezingRainDay : freezingRainNight,
      snow: isDayTime ? snowDay : snowNight,
      mist: isDayTime ? mistDay : mistNight,
      clearSky: isDayTime ? clearSkyDay : clearSkyNight,
      fewClouds: isDayTime ? fewCloudsDay : fewCloudsNight,
      scatteredClouds: scatteredClouds,
      brokenClouds: isDayTime ? brokenCloudsDay : brokenCloudsNight,
    }

    let iconName

    if (weatherId >= 200 && weatherId <= 232) {
      iconName = "thunderstorm"

    } else if (weatherId >= 300 && weatherId <= 321) {
      iconName = "showerRain"
    } else if (weatherId >= 500 && weatherId <= 504) {
      iconName = "rain"
    } else if (weatherId === 511) {
      iconName = "freezingRain"
    } else if (weatherId >= 520 && weatherId <= 531) {
      iconName = "showerRain"
    } else if (weatherId >= 600 && weatherId <= 622) {
      iconName = "snow"
    } else if (weatherId >= 701 && weatherId <= 781) {
      iconName = "mist"
    } else if (weatherId === 800) {
      iconName = "clearSky"
    } else if (weatherId === 801) {
      iconName = "fewClouds"
    } else if (weatherId === 802) {
      iconName = "scatteredClouds"
    } else if (weatherId === 803 || weatherId === 804) {
      iconName = "brokenClouds"
    } else {
      console.log(weatherId)
    }

    return <img src={iconMapping[iconName]} className="iconWeather" alt={`${iconName} icon`} />
  }

  return (
    <div className="weather-container">
      {weatherData && (
        <>
          <h3>{weatherData.name}</h3>
          <h4>{weatherData.weather[0].description}</h4>
          {getWeatherIcon()}
          <div className="thermo-container">
            <img src={thermoCelsius} alt="thermometer celsius icon" />
            <h4>{weatherData.main.temp}°C</h4>
          </div>
          <div className="wind-container">
            <img src={wind} alt="wind icon" />
            <h4>{weatherData.wind.speed}km/h</h4>
          </div>
          <div className="humidity-container">
            <img src={humidity} alt="humidity icon" />
            <h4>{weatherData.main.humidity}%</h4>
          </div>
        </>
      )}
    </div>
  )
}

export default Weather
