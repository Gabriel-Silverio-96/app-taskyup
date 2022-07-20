import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import Logo from "common/components/Logo";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Footer, IconButton, TextFieldPassword, Title } from "./styles";
import { ISignInView } from "./types/SignIn.component";

const SignInView: React.FC<ISignInView> = (props) => {
	const { register, handleSubmit, showPassword, handleShowPassword, errors } = props;
	
	return (		
		<Grid container spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{ minHeight: "100vh" }}>
			<Grid item sx={{ minWidth: "20rem" }}>
				<Logo size={125} />
				<Title>
					<Typography variant="h4">Sign in</Typography>
					<p>Welcome back! ❤️</p>
				</Title>

				<form onSubmit={handleSubmit((data: any) => console.log(data))}>
					<Grid container direction="column" spacing={5}>
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
							<TextFieldPassword>
								<TextField 
									label="Password"
									size="small" 
									type={showPassword ? "text" : "password"} 
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
							<Button fullWidth variant="contained" type="submit">Sign in</Button>
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