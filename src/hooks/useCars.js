import { useState, useEffect } from "react";
import { fetchCars } from "../API/carApi";

export const useCars = () => {
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		async function loadCars() {
			try {
				setLoading(true);
				setError(null);
				const data = await fetchCars(controller.signal);
				setCars(data);
			} catch (err) {
				if (err.name !== "AbortError") {
					setError("Не удалось загрузить список автомобилей");
				}
			} finally {
				setLoading(false);
			}
		}

		loadCars();
		return () => controller.abort();
	}, []);

	return { cars, loading, error };
};
