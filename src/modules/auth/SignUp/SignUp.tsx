import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import schema from "./shared/schema";
import SignUpView from "./SignUpView";

const SignUp: React.FC = () => {
	const { register, handleSubmit, formState: { errors } } 
		= useForm<any>({resolver: yupResolver(schema), mode: "all"});
	return <SignUpView {...{ register, errors, handleSubmit }} />;
};

export default SignUp;