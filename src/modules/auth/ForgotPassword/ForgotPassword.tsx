import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import ForgotPasswordView from "./ForgotPasswordView";
import resolverSchema from "./schema";
import { ISendEmail, IForgotPasswordForm } from "./types";

const ForgotPassword: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForgotPasswordForm>({ resolver: resolverSchema, mode: "all" });

	const [isLoading, setIsLoading] = useState(false);	
	const [sendEmail, setSendEmail] = useState<ISendEmail>({ email: "", isSending: false });
		
	const fetchForgotPassword = async (form: IForgotPasswordForm) => {
		try {
			setIsLoading(true);
			await api.post<IFetchResponseDefault>("auth/forgot-password", form);			
			setSendEmail({ email: form.email, isSending: true });
		} catch (error) {
			console.error("ForgotPassword ", error);
			setSendEmail( { email: "", isSending: false} );
		} finally {
			setIsLoading(false);
		}		
	};
	const onSubmit = handleSubmit(fetchForgotPassword);
	
	return (
		<ForgotPasswordView {...{ register, errors, onSubmit, isLoading, sendEmail }} />
	);
};

export default ForgotPassword;
