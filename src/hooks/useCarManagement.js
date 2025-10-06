import { useState, useEffect } from "react";

export const useCarManagement = (initialCars) => {
	const [cars, setCars] = useState(initialCars);

	useEffect(() => {
		setCars(initialCars);
	}, [initialCars]);

	const addCar = (newCar) => {
		setCars([...cars, newCar]);
	};

	const updateCar = (updatedCar) => {
		setCars(cars.map((car) => (car.id === updatedCar.id ? updatedCar : car)));
	};

	const deleteCar = (carId) => {
		setCars(cars.filter((car) => car.id !== carId));
	};

	return { cars, addCar, updateCar, deleteCar };
};
