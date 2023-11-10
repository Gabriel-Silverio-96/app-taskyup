import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SIGNIN_TYPE } from "shared/common/store/Auth/Auth.reducer";
import { createAction } from "shared/common/store/store.action";
import api from "shared/services/api";
import schema from "./schema";
import SignInView from "./SignInView";
import { ISignInForm } from "./types";
import { fetchPostSignInService } from "./service";

const SignIn: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignInForm>({ resolver: yupResolver(schema), mode: "all" });

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);

	const signInSubmit = useCallback(
		async ({ email, password }: ISignInForm) => {
			try {
				setIsLoading(true);
				const { data } = await fetchPostSignInService({
					body: { email, password },
				});
				const { token, user_data } = data;

				localStorage.setItem("@taskyup.token", token);
				localStorage.setItem(
					"@taskyup.user_data",
					JSON.stringify(user_data)
				);
				api.defaults.headers.common[
					"Authorization"
				] = `Bearer ${token}`;

				const action = createAction(SIGNIN_TYPE, {
					isAuthenticated: true,
					user_data,
				});
				dispatch(action);

				return navigate("/dashboard");
			} catch (error) {
				setIsLoading(false);
			}
		},
		[]
	);

	return (
		<SignInView
			{...{
				register,
				handleSubmit,
				signInSubmit,
				isLoading,
				errors,
			}}
		/>
	);
};

export default SignIn;
