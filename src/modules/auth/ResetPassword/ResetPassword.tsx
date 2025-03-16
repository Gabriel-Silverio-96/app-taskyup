import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ResetPasswordView from "modules/auth/ResetPassword/ResetPasswordView";
import { postResetPasswordService } from "modules/auth/ResetPassword/services";
import type { IResetPasswordForm } from "modules/auth/ResetPassword/types";
import { RESET_PASSWORD_SCHEMA } from "modules/auth/ResetPassword/reset-password.constants";

const ResetPassword: React.FC = () => {
	const { token } = useParams();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IResetPasswordForm>({
		resolver: yupResolver(RESET_PASSWORD_SCHEMA),
		mode: "all",
	});

	const [isResetPasswordSuccess, setIsResetPasswordSuccess] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	const resetPasswordSubmit = async ({ password }: IResetPasswordForm) => {
		try {
			setIsSaving(true);
			await postResetPasswordService({
				body: { password },
				token,
			});

			setIsResetPasswordSuccess(true);
		} catch (error) {
			setIsResetPasswordSuccess(false);
		} finally {
			setIsSaving(false);
		}
	};

	const onSubmit = handleSubmit(resetPasswordSubmit);

	return (
		<ResetPasswordView
			{...{
				register,
				onSubmit,
				errors,
				isSaving,
				isResetPasswordSuccess,
			}}
		/>
	);
};

export default ResetPassword;
