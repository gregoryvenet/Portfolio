import { useState, useRef, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

function StreetMap() {
  const [position, setPosition] = useState([46.519962, 6.633597])
  const mapRef = useRef()

  const handleMouseMove = (e) => {
    if (mapRef.current) {
      mapRef.current.leafletElement.panTo(e.latlng)
    }
  }

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.leafletElement.setView(position, 13)
    }
  }, [position])

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      ref={mapRef}
      onMouseMove={handleMouseMove}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <strong>Lausanne</strong>
          <br />
          Coordonnées : {position[0]}, {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default StreetMap
