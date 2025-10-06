import React, { useState } from "react";
import Filter from "../UI/Filter/Filter";
import CarList from "../CarList/CarList";
import CarMap from "../CarMap/CarMap";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import CarForm from "../CarForm/CarForm";
import EditCarModal from "../EditCarModal/EditCarModal";
import { useCars } from "../../hooks/useCars";
import { useSort } from "../../hooks/useSort";
import { useCarManagement } from "../../hooks/useCarManagement";
import formConfig from "@/config/formConfig.json";
import styles from "./CardsContainer.module.scss";

function CardsContainer() {
	const { cars: fetchedCars, loading, error } = useCars();
	const { cars, addCar, updateCar, deleteCar } =
		useCarManagement(fetchedCars);
	const { sortedData, sortBy, direction, handleSort } = useSort(cars);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [editingCar, setEditingCar] = useState(null);

	if (loading) return <div className={styles.loading}>Загрузка...</div>;
	if (error) return <div className={styles.error}>{error}</div>;

	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<Filter
					sortBy={sortBy}
					direction={direction}
					onSort={handleSort}
				/>
				<Button onClick={() => setIsAddModalOpen(true)}>
					{formConfig.carForm.buttons.submit.text}
				</Button>
			</div>
			<CarList cars={sortedData} onEdit={setEditingCar} />
			<CarMap cars={sortedData} />
			<Modal
				isOpen={isAddModalOpen}
				onClose={() => setIsAddModalOpen(false)}
				title={formConfig.carForm.title}
			>
				<CarForm
					onSubmit={(car) => {
						addCar(car);
						setIsAddModalOpen(false);
					}}
					onCancel={() => setIsAddModalOpen(false)}
				/>
			</Modal>
			<EditCarModal
				isOpen={!!editingCar}
				onClose={() => setEditingCar(null)}
				car={editingCar}
				onSave={updateCar}
				onDelete={deleteCar}
			/>
		</div>
	);
}

export default CardsContainer;
