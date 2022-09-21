import { LoadingButton } from "@mui/lab";
import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const ProfileFormView: React.FC<any> = () => {
	return (
		<>
			<Typography variant="h5" sx={{ mb: 5 }}>Hi, Camila</Typography>
			<form>
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
							disabled
							aria-disabled="true"
							value="email@email.com" 
							fullWidth							
						/>
					</Grid>
					<Grid item textAlign="right">
						<LoadingButton
							variant="contained"
							type="submit"
						>
                            Save
						</LoadingButton>
					</Grid>
				</Grid>
                
			</form>
		</>
	);
};

export default ProfileFormView;