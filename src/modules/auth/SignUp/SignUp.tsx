import { yupResolver } from "@hookform/resolvers/yup";
import { fetchPostSignUpService } from "modules/auth/SignUp/service";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SignUpView from "./SignUpView";
import schema from "./schema";
import { ISignUpForm } from "./types";

const SignUp: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUpForm>({ resolver: yupResolver(schema), mode: "all" });

	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const signUpSubmit = async (form: ISignUpForm) => {
		try {
			setIsLoading(true);
			await fetchPostSignUpService({ body: { ...form } });

			return navigate("/auth/signin");
		} catch (error) {
			setIsLoading(false);
		}
	};

	return (
		<SignUpView
			{...{ register, errors, handleSubmit, signUpSubmit, isLoading }}
		/>
	);
};

export default SignUp;
