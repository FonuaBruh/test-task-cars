import React from "react";
import Card from "../UI/Card/Card";
import styles from "./CarList.module.scss";

function CarList({ cars, onEdit }) {
	return (
		<div className={styles.cards}>
			{cars.map((car) => (
				<Card
					key={car.id}
					name={car.name}
					model={car.model}
					year={car.year}
					price={car.price}
					color={car.color}
					onEdit={() => onEdit(car)}
				/>
			))}
		</div>
	);
}

export default CarList;
