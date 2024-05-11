import { TextField } from "@mui/material";
import React, { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";
import { IconButton, TextFieldPasswordContainer } from "./style";
import { ITextFieldPassword } from "./types";
import { fieldErrors } from "shared/utils/fieldErrors";

const TextFieldPassword: React.FC<ITextFieldPassword> = forwardRef(
	({ register, errors }, ref) => {
		const [showPassword, setShowPassword] = useState(false);
		const handleShowPassword = () =>
			setShowPassword(prevState => !prevState);

		return (
			<TextFieldPasswordContainer ref={ref}>
				<TextField
					label="Password"
					size="small"
					type={showPassword ? "text" : "password"}
					fullWidth
					{...register("password")}
					{...fieldErrors({ errors, field: "password" })}
				/>
				<IconButton onClick={handleShowPassword}>
					{showPassword ? (
						<FiEye size={ICON_SIZE.MEDIUM} />
					) : (
						<FiEyeOff size={ICON_SIZE.MEDIUM} />
					)}
				</IconButton>
			</TextFieldPasswordContainer>
		);
	}
);

export default TextFieldPassword;
