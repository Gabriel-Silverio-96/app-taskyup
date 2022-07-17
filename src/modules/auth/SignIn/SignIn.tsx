import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SignInView from "./SignInView";

const SignIn: React.FC = () => {
	const { register, handleSubmit } = useForm();
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(prevState => !prevState);
	
	return <SignInView {...{ register, handleSubmit, showPassword, handleShowPassword }} />;
};

export default SignIn;