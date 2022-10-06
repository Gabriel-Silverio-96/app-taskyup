import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Greeting from "shared/components/Greeting";
import TextFieldPassword from "shared/components/TextFieldPassword";
import { Footer } from "./styles";
import { IResetPasswordView } from "./types";

const ResetPasswordView: React.FC<IResetPasswordView> = (props) => {    
	const { 
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
									<TextFieldPassword {...{ register, errors }}/>									
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