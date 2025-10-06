export const sortCars = (cars, sortBy, direction) => {
	if (!sortBy) return cars;
	return [...cars].sort((a, b) =>
		direction === "asc" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
	);
};
