import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ResetPasswordView from "./ResetPasswordView";
import schema from "./schema";
import { fetchPostResetPasswordService } from "./services/fetchPostResetPasswordService";
import { IResetPasswordForm } from "./types";

const ResetPassword: React.FC = () => {
	const { token } = useParams();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IResetPasswordForm>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	const resetPasswordSubmit = async ({ password }: IResetPasswordForm) => {
		try {
			setIsSaving(true);
			await fetchPostResetPasswordService({
				body: { password },
				token,
			});

			setResetPasswordSuccess(true);
		} catch (error) {
			setResetPasswordSuccess(false);
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
				resetPasswordSuccess,
			}}
		/>
	);
};

export default ResetPassword;
