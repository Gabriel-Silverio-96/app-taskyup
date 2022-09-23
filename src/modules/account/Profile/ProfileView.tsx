import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProfileForm from "./ProfileForm";

const ProfileView: React.FC<any> = () => {
	return (
		<Box component="section" sx={{ flexGrow: 1, p: 3 }}>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: "80vh" }}
			>
				<Grid item sx={{ minWidth: "20rem" }}>
					<Grid item>
						<ProfileForm />
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ProfileView;
