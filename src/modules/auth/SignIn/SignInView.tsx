import LoadingButton from "@mui/lab/LoadingButton";
import { Divider, Grid, TextField, Typography } from "@mui/material";
import { Footer } from "modules/auth/SignIn/sign-in.style";
import type { ISignInView } from "modules/auth/SignIn/types";
import React from "react";
import { Link } from "react-router-dom";
import Greeting from "shared/components/Greeting";
import TextFieldPassword from "shared/components/TextFieldPassword";
import { fieldErrors } from "shared/utils/field-errors";

const SignInView: React.FC<ISignInView> = props => {
	const { register, handleSubmit, signInSubmit, isLoading, errors } = props;

	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh" }}>
			<Grid item sx={{ minWidth: "20rem" }}>
				<Greeting title="Sign in" subtitle="Welcome back! ❤️" />
				<form onSubmit={handleSubmit(signInSubmit)}>
					<Grid container direction="column" spacing={5}>
						<Grid item>
							<TextField
								label="Email"
								size="small"
								fullWidth
								{...register("email")}
								{...fieldErrors({ errors, field: "email" })}
								autoComplete="off"
							/>
						</Grid>
						<Grid item>
							<TextFieldPassword {...{ register, errors }} />
						</Grid>
						<Grid item>
							<LoadingButton
								fullWidth
								variant="contained"
								type="submit"
								loading={isLoading}>
								Sign in
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
							<Link to="/auth/forgot-password">
								<Typography
									variant="body1"
									textAlign="center"
									sx={{ mt: 3, mb: 3 }}>
									Forgot password?
								</Typography>
							</Link>
							<Divider />
							<Link to="/auth/signup">
								<Typography
									variant="body1"
									textAlign="center"
									sx={{ mt: 3 }}>
									Sign up
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Footer>
			</Grid>
		</Grid>
	);
};

export default SignInView;
