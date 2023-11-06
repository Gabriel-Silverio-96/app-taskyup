import { Box, Grid } from "@mui/material";
import React from "react";
import ProfileForm from "modules/account/Profile/components/ProfileForm";

const ProfileView: React.FC = () => {
	return (
		<Box component="section" sx={{ flexGrow: 1, p: 3 }}>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: "80vh" }}>
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
