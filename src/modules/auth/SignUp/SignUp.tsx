import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosResponse } from "axios";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import schema from "./shared/schema";
import SignUpView from "./SignUpView";
import { ISignUpForm } from "./types/SignUp.component";

const SignUp: React.FC = () => {
	const { register, handleSubmit, formState: { errors } }
		= useForm<ISignUpForm>({ resolver: yupResolver(schema), mode: "all" });

	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const fetchSignUp = useCallback(async (dataUser: ISignUpForm) => {
		try {
			setIsLoading(true);
			await api.post("auth/create-account", dataUser) as AxiosResponse<IFetchResponseDefault>;
			navigate("/auth/signin");
		} catch (error) {
			setIsLoading(false);
			console.error("SignUp ", error);
		}
	}, []);

	return <SignUpView {...{ register, errors, handleSubmit, fetchSignUp, isLoading }} />;
};

export default SignUp;