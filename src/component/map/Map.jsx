import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import './map.scss'
import "leaflet/dist/leaflet.css";

function Map() {
    return (
        <MapContainer center={[22.3072, 73.1812]} zoom={7} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[22.3072, 73.1812]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Marker position={[23.0225, 72.5714]}>
                <Popup>
                    Another marker. <br /> Easily customizable.
                </Popup>
            </Marker>
            <Marker position={[21.1702, 72.8311]}>
                <Popup>
                    Another marker. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map