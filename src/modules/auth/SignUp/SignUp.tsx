import { yupResolver } from "@hookform/resolvers/yup";
import { fetchPostSignUpService } from "modules/auth/SignUp/services";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SignUpView from "modules/auth/SignUp/SignUpView";
import { SignUpSchema } from "modules/auth/SignUp/schema";
import { ISignUpForm } from "modules/auth/SignUp/types";

const SignUp: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ISignUpForm>({
		resolver: yupResolver(SignUpSchema),
		mode: "all",
	});

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
