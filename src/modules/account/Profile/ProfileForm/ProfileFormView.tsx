import { LoadingButton } from "@mui/lab";
import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Loading from "shared/components/Loading";
import { IProfileFormView } from "./types";

const ProfileFormView: React.FC<IProfileFormView> = (props) => {
	const { 
		register, 
		isLoading, 
		errors, 
		profileUserData, 
		handleSubmit, 
		fetchEditProfileForm, 
		isSaving 
	} = props;	

	const firstName = profileUserData?.full_name.split(" ").shift();
	return (
		<>
			<Loading backdrop isLoading={isLoading} />
			<Typography variant="h5" sx={{ mb: 5 }}>Hi, {firstName}</Typography>
			<form method="post" onSubmit={handleSubmit(fetchEditProfileForm)}>
				<Grid container direction="column" spacing={5}>
					<Grid item>
						<TextField 
							label="Full name" 
							size="small" 
							fullWidth
							defaultValue={profileUserData?.full_name}
							{...register("full_name")}	
							autoComplete="off"	
							error={errors.full_name && Boolean(errors.full_name)}
							helperText={errors.full_name ? errors.full_name?.message : ""}
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
							loading={isSaving}
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