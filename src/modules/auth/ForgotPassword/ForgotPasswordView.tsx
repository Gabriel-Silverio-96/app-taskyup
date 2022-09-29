import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Greeting from "shared/components/Greeting";
import { Footer, Link } from "./styles";
import { IForgotPasswordView } from "./types";

const ForgotPasswordView: React.FC<IForgotPasswordView>= (props) => {
	const { register, errors, onSubmit, isLoading, emailSend } = props;

	const titleMessage = emailSend.isSendEmail ? "Check your email"	: "Forgot password";
	const subtitleMessage = emailSend.isSendEmail
		? `An email is on its way to ${emailSend.email}
			with instructions for reset your password.`
		: "Which email is registered on TaskYup";

	return (
		<Grid container spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh" }}>
			<Grid item sx={{ minWidth: "20rem" }}>
				<Greeting 
					title={titleMessage}
					subtitle={subtitleMessage}
				/>				
				{!emailSend.isSendEmail && (
					<>
						<form onSubmit={onSubmit}>
							<Grid container direction="column" spacing={5}>
								<Grid item>
									<TextField 
										label="Email" 
										size="small" 
										fullWidth 
										{...register("email")}
										error={errors.email && Boolean(errors.email)}								
										helperText={errors.email ? errors.email?.message : ""}
									/>
								</Grid>
								<Grid item>
									<LoadingButton 							
										fullWidth 
										variant="contained"
										type="submit"
										loading={isLoading}
									>
										Send
									</LoadingButton>
								</Grid>
							</Grid>
						</form>
					</>
				)}
				<Footer>
					<Grid container direction="column">
						<Grid display="flex" justifyContent="center" alignItems="center" flexDirection="column">
							<Link to="/auth/signin" disabled={isLoading}>
								<Typography variant="body1" textAlign="center" sx={{ mt: 3, mb: 3 }}> 
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