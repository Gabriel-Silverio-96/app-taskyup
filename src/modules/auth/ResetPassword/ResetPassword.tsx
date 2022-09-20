import React, { useState } from "react";
import ResetPasswordView from "./ResetPasswordView";

const ResetPassword: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(prevState => !prevState);

	return <ResetPasswordView {...{ showPassword, handleShowPassword }} />;
};

export default ResetPassword;
