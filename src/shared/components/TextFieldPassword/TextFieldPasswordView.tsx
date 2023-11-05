import { TextField } from "@mui/material";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { TextFieldPassword, IconButton } from "./style";
import { ICON_SIZE } from "shared/constants";

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
					<AiOutlineEyeInvisible size={ICON_SIZE.LARGE} />
				) : (
					<AiOutlineEye size={ICON_SIZE.LARGE} />
				)}
			</IconButton>
		</TextFieldPassword>
	);
};

export default TextFieldPasswordView;
