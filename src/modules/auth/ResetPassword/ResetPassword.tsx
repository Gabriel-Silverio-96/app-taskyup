import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(prevState => !prevState);

	const fetchResetPassword = (form: IFormResetPassword) => {
		console.log(form);
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
			}}
		/>
	);
};

export default ResetPassword;
