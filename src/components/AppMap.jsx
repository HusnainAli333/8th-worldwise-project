import { useSearchParams, useNavigate } from "react-router-dom";

import styles from "../css/components/AppMap.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
export default function AppMap() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const [mapPostion, setMapPostion] = useState([40, 0]);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("Form")}>
      <MapContainer
        center={mapPostion}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPostion}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
