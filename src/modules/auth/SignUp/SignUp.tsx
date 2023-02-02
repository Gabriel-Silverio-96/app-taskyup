import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import schema from "./schema";
import fetchSignUp from "./service";
import SignUpView from "./SignUpView";
import { ISignUpForm } from "./types/SignUp.component";

const SignUp: React.FC = () => {
	const { 
		register, 
		handleSubmit, 
		formState: { errors } 
	} = useForm<ISignUpForm>({ resolver: yupResolver(schema), mode: "all" });

	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const signUpSubmit = useCallback(async (form: ISignUpForm) => {
		try {
			setIsLoading(true);
			await fetchSignUp(form);
			
			return navigate("/auth/signin");
		} catch (error) {
			setIsLoading(false);
			console.error("SignUp ", error);
		}
	}, []);

	return <SignUpView {...{ register, errors, handleSubmit, signUpSubmit, isLoading }} />;
};

export default SignUp;