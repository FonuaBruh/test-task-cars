import React from "react";
import styles from "./Card.module.scss";

function Card({ name, model, year, price, color, onEdit }) {
	return (
		<div className={styles.card} onClick={onEdit}>
			<div className={styles.ribbon} style={{ borderColor: color }}></div>
			<div className={styles.title}>
				{name} {model}
			</div>
			<div className={styles.info}>
				<span className={styles.year}>{year}</span>
				<span className={styles.price}>${price.toLocaleString()}</span>
			</div>
		</div>
	);
}

export default Card;
