import { yupResolver } from "@hookform/resolvers/yup";
import { postSignUpService } from "modules/auth/SignUp/services";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SignUpView from "modules/auth/SignUp/SignUpView";
import { SIGN_UP_SCHEMA } from "modules/auth/SignUp/sign-up.constants";
import { ISignUpForm } from "modules/auth/SignUp/types";

const SignUp: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUpForm>({
		resolver: yupResolver(SIGN_UP_SCHEMA),
		mode: "all",
	});

	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const signUpSubmit = async (form: ISignUpForm) => {
		try {
			setIsLoading(true);
			await postSignUpService({ body: { ...form } });

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
