import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import schema from "./shared/schema";
import { ISignInForm } from "./shared/schema/types/types.schema";
import SignInView from "./SignInView";

const SignIn: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ISignInForm>({ resolver: yupResolver(schema), mode: "all" });
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(prevState => !prevState);

	return <SignInView {...{ register, handleSubmit, showPassword, handleShowPassword, errors }} />;
};

export default SignIn;