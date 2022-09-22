import { LoadingButton } from "@mui/lab";
import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Loading from "shared/components/Loading";

const ProfileFormView: React.FC<any> = (props) => {
	const { register, isLoading, profileUserData, onSubmit } = props;	

	return (
		<>
			<Loading backdrop isLoading={isLoading} />
			<Typography variant="h5" sx={{ mb: 5 }}>Hi, Camila</Typography>
			<form method="post" onSubmit={onSubmit}>
				<Grid container direction="column" spacing={5}>
					<Grid item>
						<TextField 
							label="Full name" 
							size="small" 
							fullWidth
							defaultValue={profileUserData?.full_name}
							{...register("full_name")}							
						/>
					</Grid>
					<Grid item>
						<TextField 
							label="Email" 
							size="small"
							disabled
							aria-disabled="true"
							fullWidth				
							defaultValue={profileUserData?.email}
							{...register("email")}			
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