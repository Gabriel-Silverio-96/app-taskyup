import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "./styles";
import Logo from "shared/components/Logo";
import { Footer, Title } from "./styles";
import { IForgotPasswordView } from "./types";

const ForgotPasswordView: React.FC<IForgotPasswordView>= (props) => {
	const { register, errors, onSubmit, isLoading, emailSend } = props;

	return (
		<Grid container spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh" }}>
			<Grid item sx={{ minWidth: "20rem" }}>
				<Logo size={125} />
				{!emailSend.isSendEmail ? (
					<>
						<Title>
							<Typography variant="h4" fontWeight={700}>Forgot<br /> my password</Typography>
							<p>Which email is registered on Taskyup</p>
						</Title>
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
				) : (
					<Title>
						<Typography variant="h4" fontWeight={700}>Check your email</Typography>
						<Typography>
							An email is on its way to <strong>{emailSend.email}</strong><br/>
							with instructions for reset your password.
						</Typography>
					</Title>
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