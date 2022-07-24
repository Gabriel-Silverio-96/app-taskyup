import LoadingButton from "@mui/lab/LoadingButton";
import { Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "shared/components/Logo";
import { Footer, IconButton, TextFieldPassword, Title } from "./styles";
import { ISignInView } from "./types/SignIn.component";

const SignInView: React.FC<ISignInView> = (props) => {
	const { register, handleSubmit, fetchSignIn, isLoading, showPassword, handleShowPassword, errors } = props;
	
	return (		
		<Grid container spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh" }}>
			<Grid item sx={{ minWidth: "20rem" }}>
				<Logo size={125} />
				<Title>
					<Typography variant="h4">Sign in</Typography>
					<p>Welcome back! ❤️</p>
				</Title>

				<form onSubmit={handleSubmit(fetchSignIn)}>
					<Grid container direction="column" spacing={5}>
						<Grid item>
							<TextField 
								label="Email" 
								size="small" 
								fullWidth 
								value="email@email.com"
								{...register("email")} 
								error={errors.email && Boolean(errors.email)}
								helperText={errors.email ? errors.email?.message : ""}
								autoComplete="off"
							/>
						</Grid>
						<Grid item>
							<TextFieldPassword>
								<TextField 
									label="Password"
									size="small" 
									type={showPassword ? "text" : "password"}
									value="123456789" 
									fullWidth {...register("password")} 	
									error={errors.password && Boolean(errors.password)}	
									helperText={errors.password ? errors.password?.message : ""}							
								/>
								<IconButton onClick={handleShowPassword}>
									{showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
								</IconButton>
							</TextFieldPassword>
						</Grid>
						<Grid item>
							<LoadingButton 							
								fullWidth 
								variant="contained"
								type="submit"
								loading={isLoading}
							>
								Sign in
							</LoadingButton>
						</Grid>
					</Grid>
				</form>

				<Footer>
					<Grid container direction="column">
						<Grid display="flex" justifyContent="center" alignItems="center" flexDirection="column">
							<Link to="/auth/forgot-password">
								<Typography variant="body1" textAlign="center" sx={{ mt: 3, mb: 3 }}>Forgot password?</Typography>
							</Link>
							<Divider />
							<Link to="/auth/signup">
								<Typography variant="body1" textAlign="center" sx={{ mt: 3 }}>Sign up</Typography>
							</Link>
						</Grid>
					</Grid>
				</Footer>
			</Grid>
		</Grid>
	);
};

export default SignInView;	