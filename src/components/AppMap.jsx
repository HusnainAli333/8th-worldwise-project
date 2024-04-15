/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "../css/components/AppMap.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../context/CitiesContext";
import { useGeolocation } from "../hooks/useGeoLocation";
import Button from "./Button";
import { useUrlPostion } from "../hooks/useUrlPostion";
export default function AppMap() {
  const [mapPostion, setMapPostion] = useState([40, 0]);
  const { state } = useCities();
  const { isLoading, position, getPosition } = useGeolocation();
  const [lat, lng] = useUrlPostion();

  useEffect(
    function () {
      if (lat && lng) setMapPostion([lat, lng]);
    },
    [lat, lng]
  );
  useEffect(
    function () {
      if (position) setMapPostion(position);
    },
    [position]
  );
  return (
    <div className={styles.mapContainer}>
      <Button type="position" onclick={getPosition}>
        {isLoading ? "Loading.." : "Live Postion"}
      </Button>
      <MapContainer
        center={mapPostion}
        // center={[lat || 40, lng || 20]}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {state.citiesList.map((value) => {
          return (
            <Marker
              position={[value.position.lat, value.position.lng]}
              key={value.id}
            >
              <Popup>
                <span
                  className={`flag-icon flag-icon-${value.emoji}`}
                  title={value.emoji}
                ></span>
                {value.cityName}
              </Popup>
            </Marker>
          );
        })}
        <MapPostion postion={mapPostion} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}
function MapPostion({ postion }) {
  const map = useMap();
  map.setView(postion);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`Form?lat=${e.latlng.lat}&lng=${e.latlng.lat}`),
  });
}
