import React from "react";
import { useForm } from "react-hook-form";
import ForgotPasswordView from "./ForgotPasswordView";
import resolverSchema from "./schema";
import { IForgotPasswordForm } from "./types";

const ForgotPassword: React.FC = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<IForgotPasswordForm>({ resolver: resolverSchema, mode: "all" });

	const fetchForgotPassword = (data: IForgotPasswordForm) => {
		console.log(data);        
	};

	const onSubmit = handleSubmit(fetchForgotPassword);
    
	return <ForgotPasswordView {...{ register, errors, onSubmit }}/>;
};

export default ForgotPassword;