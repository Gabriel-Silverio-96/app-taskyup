import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Logo from "shared/components/Logo";
import { TextFieldPassword, Title, IconButton } from "./styles";

const ResetPasswordView: React.FC<any> = (props) => {    
	const { showPassword, handleShowPassword } = props;
    
	return (
		<Grid container spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh" }}>
			<Grid item sx={{ minWidth: "20rem" }}>
				<Logo size={125} />
				<Title>
					<Typography variant="h4" fontWeight={700}>Reset<br /> password</Typography>
					<p>Lorem ipsum</p>
				</Title>
				<form>
					<Grid container direction="column" spacing={5}>
						<Grid item>
							<TextFieldPassword>
								<TextField 
									label="Password"
									size="small" 
									fullWidth
									type={showPassword ? "text" : "password"}
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
							>
                                Send
							</LoadingButton>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
};

export default ResetPasswordView;