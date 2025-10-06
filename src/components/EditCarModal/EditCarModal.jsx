import React, { useState } from "react";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import formConfig from "@/config/formConfig.json";
import styles from "./EditCarModal.module.scss";

function EditCarModal({ isOpen, onClose, car, onSave, onDelete }) {
	const config = formConfig.editCarForm;
	const [formData, setFormData] = useState(
		config.fields.reduce((acc, field) => {
			acc[field.name] = car?.[field.name] || "";
			return acc;
		}, {})
	);

	const handleSave = (e) => {
		e.preventDefault();
		onSave({ ...car, ...formData, price: Number(formData.price) });
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} title={config.title}>
			<form onSubmit={handleSave} className={styles.form}>
				{config.fields.map((field) => (
					<Input
						key={field.name}
						label={field.label}
						type={field.type}
						value={formData[field.name]}
						onChange={(val) => setFormData({ ...formData, [field.name]: val })}
						required={field.required}
					/>
				))}
				<div className={styles.actions}>
					<div className={styles.mainActions}>
						<Button type={config.buttons.submit.type} variant={config.buttons.submit.variant}>
							{config.buttons.submit.text}
						</Button>
						<Button
							type={config.buttons.cancel.type}
							variant={config.buttons.cancel.variant}
							onClick={onClose}
						>
							{config.buttons.cancel.text}
						</Button>
					</div>
					<Button
						type={config.buttons.delete.type}
						variant={config.buttons.delete.variant}
						onClick={() => {
							onDelete(car.id);
							onClose();
						}}
					>
						{config.buttons.delete.text}
					</Button>
				</div>
			</form>
		</Modal>
	);
}

export default EditCarModal;
