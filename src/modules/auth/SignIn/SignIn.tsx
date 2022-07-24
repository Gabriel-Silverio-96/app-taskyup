import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import api from "shared/services/api";
import schema from "./shared/schema";
import { ISignInForm } from "./shared/schema/types/types.schema";
import SignInView from "./SignInView";
import { IDataUser, IFetchSignInResponse } from "./types/SignIn.component";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
	const { register, handleSubmit, formState: { errors } }
		= useForm<ISignInForm>({ resolver: yupResolver(schema), mode: "all" });

	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(prevState => !prevState);

	const fetchSignIn = async (dataUser: IDataUser) => {
		setIsLoading(true);
		try {
			const { data } = await api.post("auth/login", dataUser) as AxiosResponse<IFetchSignInResponse>;
			localStorage.setItem("@taskyup.token", data.token);
			localStorage.setItem("@taskyup.user_data", JSON.stringify(data.user_data));
			return navigate("/board");
		} catch (error) {
			console.error("SignIn ", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<SignInView
			{...{
				register,
				handleSubmit,
				fetchSignIn,
				isLoading,
				showPassword,
				handleShowPassword,
				errors
			}} />
	);
};

export default SignIn;