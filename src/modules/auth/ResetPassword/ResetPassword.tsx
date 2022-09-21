import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import api from "shared/services/api";
import ResetPasswordView from "./ResetPasswordView";
import schema from "./schema";
import { IFormResetPassword } from "./types";

const ResetPassword: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormResetPassword>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const { token } = useParams();
	const [showPassword, setShowPassword] = useState(false);
	const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const handleShowPassword = () => setShowPassword(prevState => !prevState);

	const fetchResetPassword = async (form: IFormResetPassword) => {
		try {
			setIsSaving(true);
			await api.post(`auth/reset-password/token=${token}`, form);
			setResetPasswordSuccess(true);
		} catch (error) {
			setResetPasswordSuccess(false);
			console.error("ResetPassword ", error);
		} finally {
			setIsSaving(false);
		}
	};
	const onSubmit = handleSubmit(fetchResetPassword);

	return (
		<ResetPasswordView
			{...{
				showPassword,
				handleShowPassword,
				register,
				onSubmit,
				errors,
				isSaving,
				resetPasswordSuccess
			}}
		/>
	);
};

export default ResetPassword;
