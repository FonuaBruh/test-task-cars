import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./CarMap.module.scss";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
	iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
	shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function CarMap({ cars }) {
	const center = cars.length > 0 
		? [cars[0].latitude, cars[0].longitude] 
		: [55.753332, 37.621676];

	return (
		<div className={styles.mapContainer}>
			<MapContainer center={center} zoom={10} className={styles.map}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				/>
				{cars.map((car) => (
					<Marker key={car.id} position={[car.latitude, car.longitude]}>
						<Popup>
							<strong>{car.name} {car.model}</strong><br />
							Год: {car.year}<br />
							Цена: ${car.price.toLocaleString()}
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
}

export default CarMap;
