import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import formConfig from "@/config/formConfig.json";
import styles from "./CarForm.module.scss";

function CarForm({ onSubmit, onCancel }) {
	const config = formConfig.carForm;
	const [formData, setFormData] = useState(
		config.fields.reduce((acc, field) => {
			acc[field.name] = field.type === "color" ? "#000000" : "";
			return acc;
		}, {})
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({
			...formData,
			id: Date.now(),
			year: Number(formData.year),
			price: Number(formData.price),
			latitude: Number(formData.latitude) || 55.753332,
			longitude: Number(formData.longitude) || 37.621676,
		});
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			{config.fields.map((field) =>
				field.type === "color" ? (
					<div key={field.name} className={styles.field}>
						<label className={styles.label}>{field.label}</label>
						<input
							type="color"
							value={formData[field.name]}
							onChange={(e) =>
								setFormData({ ...formData, [field.name]: e.target.value })
							}
							className={styles.colorInput}
						/>
					</div>
				) : (
					<Input
						key={field.name}
						label={field.label}
						type={field.type}
						value={formData[field.name]}
						onChange={(val) => setFormData({ ...formData, [field.name]: val })}
						required={field.required}
					/>
				)
			)}
			<div className={styles.actions}>
				<Button type={config.buttons.submit.type} variant={config.buttons.submit.variant}>
					{config.buttons.submit.text}
				</Button>
				<Button
					type={config.buttons.cancel.type}
					variant={config.buttons.cancel.variant}
					onClick={onCancel}
				>
					{config.buttons.cancel.text}
				</Button>
			</div>
		</form>
	);
}

export default CarForm;
