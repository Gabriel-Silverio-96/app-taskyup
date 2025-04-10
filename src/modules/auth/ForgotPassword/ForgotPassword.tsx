import { yupResolver } from "@hookform/resolvers/yup";
import ForgotPasswordView from "modules/auth/ForgotPassword/ForgotPasswordView";
import {
	FORGOT_PASSWORD_SCHEMA,
	INITAL_STATE_SEND_EMAIL,
} from "modules/auth/ForgotPassword/forgot-password.constants";
import { postForgotPasswordService } from "modules/auth/ForgotPassword/services";
import type {
	IForgotPasswordForm,
	ISendEmail,
} from "modules/auth/ForgotPassword/types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ForgotPassword: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForgotPasswordForm>({
		resolver: yupResolver(FORGOT_PASSWORD_SCHEMA),
		mode: "all",
	});

	const [isLoading, setIsLoading] = useState(false);
	const [sendEmail, setSendEmail] = useState<ISendEmail>(
		INITAL_STATE_SEND_EMAIL
	);

	const fetchForgotSubmit = async ({ email }: IForgotPasswordForm) => {
		try {
			setIsLoading(true);
			await postForgotPasswordService({ body: { email } });

			setSendEmail({ email: email, isSending: true });
		} catch (error) {
			setSendEmail(INITAL_STATE_SEND_EMAIL);
		} finally {
			setIsLoading(false);
		}
	};
	const onSubmit = handleSubmit(fetchForgotSubmit);

	return (
		<ForgotPasswordView
			{...{ register, errors, onSubmit, isLoading, sendEmail }}
		/>
	);
};

export default ForgotPassword;
