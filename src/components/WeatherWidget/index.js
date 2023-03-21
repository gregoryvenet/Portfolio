import { useState, useEffect } from "react"
import ReactWeather, { data, isLoading } from "react-open-weather"
import "./index.scss"


const WeatherWidget = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const [ coords, setCoords ] = useState([])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      })
    } else {
      alert("Géolocalisation non pris en charge.")
    }
  }, [])

  return (
    <div className="sidebar">
      {coords && (
        <ReactWeather
          apiKey={apiKey}
          isLoading={isLoading}
          data={data}
          showForecast
          lang="fr"
          latitude={coords.lat}
          longitude={coords.lon}
        />
      )}
    </div>
  )
}

export default WeatherWidget
