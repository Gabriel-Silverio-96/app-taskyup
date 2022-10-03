import React, { forwardRef, useState } from "react";
import TextFieldPasswordView from "./TextFieldPasswordView";

const TextFieldPassword: React.FC<any> = forwardRef(({ register, errors }, ref) => {
	const [showPassword, setShowPassword] = useState(false);
	const handleShowPassword = () => setShowPassword(prevState => !prevState);

	return (
		<TextFieldPasswordView
			{...{ handleShowPassword, showPassword, register, errors, ref }}
		/>
	);
});

export default TextFieldPassword;