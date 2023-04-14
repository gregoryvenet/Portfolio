import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

function StreetMap() {
  const Position = [46.5275392896138, 6.648838968370479]

  return (
    <MapContainer center={Position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={Position}>
        <Popup>
          Mon adresse postale içi ou pour partager un café! ;)
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default StreetMap
