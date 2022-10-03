import { TextField } from "@mui/material";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TextFieldPassword, IconButton } from "./style";

const TextFieldPasswordView: React.FC<any> = props => {
	const { showPassword, handleShowPassword, errors, register, ref } = props;
	return (
		<TextFieldPassword ref={ref}>
			<TextField
				label="Password"
				size="small"
				type={showPassword ? "text" : "password"}
				fullWidth
				{...register("password")}
				error={errors.password && Boolean(errors.password)}
				helperText={errors.password ? errors.password?.message : ""}
			/>
			<IconButton onClick={handleShowPassword}>
				{showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
			</IconButton>
		</TextFieldPassword>
	);
};

export default TextFieldPasswordView;
