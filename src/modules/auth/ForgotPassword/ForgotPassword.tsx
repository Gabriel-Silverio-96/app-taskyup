import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { INITAL_STATE_SEND_EMAIL } from "./constants";
import ForgotPasswordView from "./ForgotPasswordView";
import resolverSchema from "./schema";
import { fetchPostForgotPasswordService } from "./service";
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
			await fetchPostForgotPasswordService(form);
			
			setSendEmail({ email: form.email, isSending: true });
		} catch (error) {			
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
