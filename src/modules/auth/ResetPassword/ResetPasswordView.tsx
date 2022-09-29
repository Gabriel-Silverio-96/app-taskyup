import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import Greeting from "shared/components/Greeting";
import { Footer, IconButton, TextFieldPassword } from "./styles";
import { IResetPasswordView } from "./types";

const ResetPasswordView: React.FC<IResetPasswordView> = (props) => {    
	const { 
		showPassword, 
		handleShowPassword, 
		register, 
		onSubmit, 
		errors, 
		isSaving, 		
		resetPasswordSuccess
	} = props;
	
	const titleMessage = resetPasswordSuccess ? "Successfully" : "Reset password";
	const subtitleMessage = resetPasswordSuccess
		? "Your password has been reset successfully"
		: "Create new password bellow";
		
	return (
		<Grid 
			container 
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh" }}            
		>
			<Grid item sx={{ minWidth: "20rem" }}>				
				<Greeting 
					title={titleMessage}
					subtitle={subtitleMessage}
				/>				
				{!resetPasswordSuccess ? (
					<>					
						<form onSubmit={onSubmit}>
							<Grid container direction="column" spacing={5}>
								<Grid item>
									<TextFieldPassword>
										<TextField 
											label="Password"
											size="small" 
											fullWidth
											{...register("password")}
											type={showPassword ? "text" : "password"}
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
										loading={isSaving}
									>
                                        Save
									</LoadingButton>
								</Grid>
							</Grid>
						</form>						
					</>
				) : (
					<Footer>
						<Grid container direction="column">
							<Grid display="flex" justifyContent="center" alignItems="center" flexDirection="column">
								<Link to="/auth/signin">
									<Typography variant="body1" textAlign="center" sx={{ mt: 3, mb: 3 }}> 
											Sign in
									</Typography>
								</Link>
							</Grid>
						</Grid>
					</Footer>
				)}
			</Grid>
		</Grid>
	);
};

export default ResetPasswordView;