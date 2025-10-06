export const fetchCars = async (signal) => {
	const response = await fetch(
		"https://ofc-test-01.tspb.su/test-task/vehicles",
		{ signal }
	);

	if (!response.ok) {
		throw new Error(`Ошибка HTTP: ${response.status}`);
	}

	return response.json();
};
