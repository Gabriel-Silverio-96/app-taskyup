import { TextField } from "@mui/material";
import React, { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";
import {
	IconButton,
	TextFieldPasswordContainer,
} from "shared/components/TextFieldPassword/text-field-password.style";
import type { ITextFieldPassword } from "shared/components/TextFieldPassword/types";
import { fieldErrors } from "shared/utils/field-errors";

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
