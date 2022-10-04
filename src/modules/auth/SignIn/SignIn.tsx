import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosResponse } from "axios";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGNIN_TYPE } from "shared/common/store/Auth/Auth.reducer";
import { createAction } from "shared/common/store/store.action";
import api from "shared/services/api";
import schema from "./schema";
import SignInView from "./SignInView";
import { IFetchSignInResponse, ISignInForm } from "./types/SignIn.component";

const SignIn: React.FC = () => {
	const { register, handleSubmit, formState: { errors } }
		= useForm<ISignInForm>({ resolver: yupResolver(schema), mode: "all" });

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const fetchSignIn = useCallback(async (dataUser: ISignInForm) => {
		try {
			setIsLoading(true);
			const { 
				data: { token, user_data } 
			} = await api.post("auth/login", dataUser) as AxiosResponse<IFetchSignInResponse>;
			
			localStorage.setItem("@taskyup.token", token);
			localStorage.setItem("@taskyup.user_data", JSON.stringify(user_data));
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			
			dispatch(createAction(SIGNIN_TYPE, { isAuthenticated: true, user_data }));
			return navigate("/dashboard");
		} catch (error) {
			setIsLoading(false);
			console.error("SignIn ", error);
		}
	}, []);

	return (
		<SignInView
			{...{
				register,
				handleSubmit,
				fetchSignIn,
				isLoading,
				errors
			}} />
	);
};

export default SignIn;