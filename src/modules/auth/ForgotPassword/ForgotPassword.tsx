import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { INITAL_STATE_SEND_EMAIL } from "./constant";
import ForgotPasswordView from "./ForgotPasswordView";
import resolverSchema from "./schema";
import { fetchForgotPassword } from "./service";
import { IForgotPasswordForm, ISendEmail } from "./types";

const ForgotPassword: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForgotPasswordForm>({ resolver: resolverSchema, mode: "all" });

	const [isLoading, setIsLoading] = useState(false);	
	const [sendEmail, setSendEmail] = useState<ISendEmail>(INITAL_STATE_SEND_EMAIL);
		
	const fetchForgotSubmit = async (form: IForgotPasswordForm) => {
		try {
			setIsLoading(true);
			await fetchForgotPassword(form);
			
			setSendEmail({ email: form.email, isSending: true });
		} catch (error) {
			console.error("ForgotPassword ", error);			
			setSendEmail(INITAL_STATE_SEND_EMAIL);
		} finally {
			setIsLoading(false);
		}		
	};
	const onSubmit = handleSubmit(fetchForgotSubmit);
	
	return (
		<ForgotPasswordView {...{ register, errors, onSubmit, isLoading, sendEmail }} />
	);
};

export default ForgotPassword;
