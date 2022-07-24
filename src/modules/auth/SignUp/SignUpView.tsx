import { LoadingButton } from "@mui/lab";
import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "shared/components/Logo";
import { BackgroundSignUp, Title, Footer } from "./styles";

const SignUpView: React.FC<any> = () => {
	return (
		<Grid container justifyContent="space-around" sx={{ minHeight: "100vh" }}>
			<Grid item md={6}>				
				<BackgroundSignUp>
					<Typography variant="h3" fontWeight={700}>Time to create your account</Typography>
					<p>You are a few steps to improve your organization</p>
				</BackgroundSignUp>
			</Grid>
			<Grid item md={6} 
				justifyContent="center"
				display="flex"
				alignItems="center"
				flexDirection="column"
				sx={{ minWidth: "20rem" }}
			>
				<div style={{ minWidth: "20rem" }}>
					<Logo size={125} />
					<Title>
						<Typography variant="h4" fontWeight={700}>Sign up</Typography>
						<p>Fill the form ✏️</p>
					</Title>

					<form onSubmit={() => ""}>
						<Grid container direction="column" spacing={5}>
							<Grid item>
								<TextField 
									label="Full name" 
									size="small" 
									fullWidth 								
								/>
							</Grid>
							<Grid item>
								<TextField 
									label="Email" 
									size="small" 
									fullWidth 								
								/>
							</Grid>
							<Grid item>
								<TextField 
									label="Password"
									size="small" 
									fullWidth
								/>
							</Grid>
							<Grid item>
								<LoadingButton 							
									fullWidth 
									variant="contained"
									type="submit"
								>
								    Sign up
								</LoadingButton>
							</Grid>
						</Grid>
					</form>
				</div>
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