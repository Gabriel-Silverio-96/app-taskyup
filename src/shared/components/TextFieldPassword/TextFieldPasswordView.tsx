import { TextField } from "@mui/material";
import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";
import { IconButton, TextFieldPassword } from "./style";

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
				{showPassword ? (
					<FiEye size={ICON_SIZE.MEDIUM} />
				) : (
					<FiEyeOff size={ICON_SIZE.MEDIUM} />
				)}
			</IconButton>
		</TextFieldPassword>
	);
};

export default TextFieldPasswordView;
