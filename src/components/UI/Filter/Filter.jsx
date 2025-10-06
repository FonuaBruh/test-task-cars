import React from "react";
import styles from "./Filter.module.scss";

function Filter({ sortBy, direction, onSort }) {
	const handleToggle = (field) => {
		if (sortBy !== field) {
			onSort(field, "asc");
		} else if (direction === "asc") {
			onSort(field, "desc");
		} else {
			onSort(null, null);
		}
	};

	const getText = (field) => {
		if (sortBy !== field) return "—";
		return direction === "asc" ? "по возрастанию" : "по убыванию";
	};

	return (
		<div className={styles.filter}>
			<div className={styles.item} onClick={() => handleToggle("year")}>
				<span className={styles.label}>Год:</span>
				<span className={styles.value}>{getText("year")}</span>
			</div>
			<div className={styles.item} onClick={() => handleToggle("price")}>
				<span className={styles.label}>Цена:</span>
				<span className={styles.value}>{getText("price")}</span>
			</div>
		</div>
	);
}

export default Filter;
