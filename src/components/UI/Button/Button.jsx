import React from "react";
import styles from "./Button.module.scss";
import uiConfig from "@/config/uiConfig.json";

function Button({ children, onClick, variant, type }) {
	const config = uiConfig.button;
	const finalVariant = variant || config.defaults.variant;
	const finalType = type || config.defaults.type;

	return (
		<button
			className={`${styles.button} ${styles[finalVariant]}`}
			onClick={onClick}
			type={finalType}
		>
			{children}
		</button>
	);
}

export default Button;
