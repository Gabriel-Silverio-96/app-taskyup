import { LoadingButton } from "@mui/lab";
import { Grid, TextField, Typography } from "@mui/material";
import {
	BackgroundSignUp,
	Footer,
	GridForm,
} from "modules/auth/SignUp/sign-up.style";
import type { ISignUpView } from "modules/auth/SignUp/types";
import React from "react";
import { Link } from "react-router-dom";
import Greeting from "shared/components/Greeting";
import TextFieldPassword from "shared/components/TextFieldPassword";
import { fieldErrors } from "shared/utils/field-errors";

const SignUpView: React.FC<ISignUpView> = props => {
	const { register, errors, handleSubmit, signUpSubmit, isLoading } = props;

	return (
		<Grid
			container
			justifyContent="space-around"
			sx={{ minHeight: "100vh" }}>
			<Grid item md={6} sm={12}>
				<BackgroundSignUp>
					<div>
						<Typography variant="h2" fontWeight={700}>
							Time to create <br />
							your account
						</Typography>
						<Typography variant="body1" marginTop={2}>
							You are a few steps to improve your organization
						</Typography>
					</div>
				</BackgroundSignUp>
			</Grid>
			<Grid
				item
				md={6}
				sm={12}
				justifyContent="center"
				display="flex"
				alignItems="center"
				flexDirection="column"
				sx={{ minWidth: "20rem", marginTop: "2rem" }}>
				<GridForm>
					<Greeting title="Sign up" subtitle="Fill the form ✏️" />
					<form onSubmit={handleSubmit(signUpSubmit)}>
						<Grid container direction="column" spacing={5}>
							<Grid item>
								<TextField
									label="Full name"
									size="small"
									fullWidth
									{...register("full_name")}
									{...fieldErrors({
										errors,
										field: "full_name",
									})}
									autoComplete="off"
								/>
							</Grid>
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
									Sign up
								</LoadingButton>
							</Grid>
						</Grid>
					</form>
				</GridForm>
				<Footer>
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
									Do you have an account? Login
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Footer>
			</Grid>
		</Grid>
	);
};

export default SignUpView;
