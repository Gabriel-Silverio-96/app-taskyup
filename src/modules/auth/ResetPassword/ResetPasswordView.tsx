import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, Typography } from "@mui/material";
import { Footer } from "modules/auth/ResetPassword/reset-password.style";
import type { IResetPasswordView } from "modules/auth/ResetPassword/types";
import {
	defineSubtitleMessage,
	defineTitleMessage,
} from "modules/auth/ResetPassword/utils";
import React from "react";
import { Link } from "react-router-dom";
import Greeting from "shared/components/Greeting";
import TextFieldPassword from "shared/components/TextFieldPassword";

const ResetPasswordView: React.FC<IResetPasswordView> = props => {
	const { register, onSubmit, errors, isSaving, isResetPasswordSuccess } =
		props;

	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh" }}>
			<Grid item sx={{ minWidth: "20rem" }}>
				<Greeting
					title={defineTitleMessage(isResetPasswordSuccess)}
					subtitle={defineSubtitleMessage(isResetPasswordSuccess)}
				/>

				<form onSubmit={onSubmit} hidden={isResetPasswordSuccess}>
					<Grid container direction="column" spacing={5}>
						<Grid item>
							<TextFieldPassword {...{ register, errors }} />
						</Grid>
						<Grid item>
							<LoadingButton
								fullWidth
								variant="contained"
								type="submit"
								loading={isSaving}>
								Save
							</LoadingButton>
						</Grid>
					</Grid>
				</form>
				<Footer hidden={!isResetPasswordSuccess}>
					<Grid container direction="column">
						<Grid
							display="flex"
							justifyContent="center"
							alignItems="center"
							flexDirection="column">
							<Link to="/auth/signin">
								<Typography
									variant="body1"
									textAlign="center"
									sx={{ mt: 3, mb: 3 }}>
									Sign in
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Footer>
			</Grid>
		</Grid>
	);
};

export default ResetPasswordView;
