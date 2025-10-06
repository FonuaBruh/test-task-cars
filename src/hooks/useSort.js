import { useState, useMemo } from "react";
import { sortCars } from "../utils/sortCars";

export const useSort = (data) => {
	const [sortBy, setSortBy] = useState(null);
	const [direction, setDirection] = useState(null);

	const sortedData = useMemo(
		() => sortCars(data, sortBy, direction),
		[data, sortBy, direction]
	);

	const handleSort = (field, dir) => {
		setSortBy(field);
		setDirection(dir);
	};

	return { sortedData, sortBy, direction, handleSort };
};
