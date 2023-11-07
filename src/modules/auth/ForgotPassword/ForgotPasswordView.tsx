import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Greeting from "shared/components/Greeting";
import { Footer, Link } from "modules/auth/ForgotPassword/styles";
import { IForgotPasswordView } from "modules/auth/ForgotPassword/types";
import { defineTitleMessage } from "modules/auth/ForgotPassword/utils/define-title-message";
import { defineSubtitleMessage } from "modules/auth/ForgotPassword/utils/define-subtitle-message";

const ForgotPasswordView: React.FC<IForgotPasswordView> = props => {
	const {
		register,
		errors,
		onSubmit,
		isLoading,
		sendEmail: { email, isSending },
	} = props;

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
					title={defineTitleMessage(isSending)}
					subtitle={defineSubtitleMessage(isSending, email)}
				/>
				<form onSubmit={onSubmit} hidden={isSending}>
					<Grid container direction="column" spacing={5}>
						<Grid item>
							<TextField
								label="Email"
								size="small"
								fullWidth
								error={errors.email && Boolean(errors.email)}
								helperText={
									errors.email ? errors.email?.message : ""
								}
								{...register("email")}
							/>
						</Grid>
						<Grid item>
							<LoadingButton
								fullWidth
								variant="contained"
								type="submit"
								loading={isLoading}>
								Send
							</LoadingButton>
						</Grid>
					</Grid>
				</form>
				<Footer>
					<Grid container direction="column">
						<Grid
							display="flex"
							justifyContent="center"
							alignItems="center"
							flexDirection="column">
							<Link to="/auth/signin" disabled={isLoading}>
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

export default ForgotPasswordView;
