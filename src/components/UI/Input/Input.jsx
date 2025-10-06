import React from "react";
import styles from "./Input.module.scss";
import uiConfig from "@/config/uiConfig.json";

function Input({ label, value, onChange, type, required }) {
	const config = uiConfig.input;
	const finalType = type || config.defaults.type;
	const finalRequired = required !== undefined ? required : config.defaults.required;

	return (
		<div className={styles.field}>
			<label className={styles.label}>{label}</label>
			<input
				className={styles.input}
				type={finalType}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				required={finalRequired}
			/>
		</div>
	);
}

export default Input;
