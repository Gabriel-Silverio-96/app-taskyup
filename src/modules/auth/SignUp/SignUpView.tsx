import { LoadingButton } from "@mui/lab";
import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "shared/components/Logo";
import { BackgroundSignUp, Footer, GridForm, Title } from "./styles";
import { ISignUpView } from "./types/SignUp.component";

const SignUpView: React.FC<ISignUpView> = (props) => {
	const { register, errors, handleSubmit, fetchSignUp, isLoading } = props;
	return (
		<Grid container justifyContent="space-around" sx={{ minHeight: "100vh" }}>
			<Grid item md={6} sm={12}>
				<BackgroundSignUp>
					<Typography variant="h3" fontWeight={700}>Time to create your account</Typography>
					<p>You are a few steps to improve your organization</p>
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
				sx={{ minWidth: "20rem", marginTop: "2rem" }}
			>
				<GridForm>
					<Logo size={125} />
					<Title>
						<Typography variant="h4" fontWeight={700}>Sign up</Typography>
						<p>Fill the form ✏️</p>
					</Title>

					<form onSubmit={handleSubmit(fetchSignUp)}>
						<Grid container direction="column" spacing={5}>
							<Grid item>
								<TextField
									label="Full name"
									size="small"
									fullWidth
									{...register("full_name")}
									error={errors.full_name && Boolean(errors.full_name)}
									helperText={errors.full_name ? errors.full_name?.message : ""}
									autoComplete="off"
								/>
							</Grid>
							<Grid item>
								<TextField
									label="Email"
									size="small"
									fullWidth
									{...register("email")}
									error={errors.email && Boolean(errors.email)}
									helperText={errors.email ? errors.email?.message : ""}
									autoComplete="off"
								/>
							</Grid>
							<Grid item>
								<TextField
									label="Password"
									size="small"
									fullWidth
									{...register("password")}
									error={errors.password && Boolean(errors.password)}	
									helperText={errors.password ? errors.password?.message : ""}
								/>
							</Grid>
							<Grid item>
								<LoadingButton
									fullWidth
									variant="contained"
									type="submit"
									loading={isLoading}
								>
									Sign up
								</LoadingButton>
							</Grid>
						</Grid>
					</form>
				</GridForm>
				<Footer>
					<Grid container direction="column">
						<Grid display="flex" justifyContent="center" alignItems="center" flexDirection="column">
							<Link to="/auth/signin">
								<Typography variant="body1" textAlign="center" sx={{ mt: 3, mb: 3 }}>
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