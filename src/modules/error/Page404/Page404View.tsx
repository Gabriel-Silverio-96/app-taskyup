import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { IPage404View } from "./types/Page404.component";

const Page404View: React.FC<IPage404View> = (props) => {
	const { backPage } = props;
	return (
		<Grid 
			container 
			justifyContent="center" 
			alignItems="center" 
			sx={ { height: "100vh" }}
			textAlign="center"
		>
			<Grid item md={12}>
				<Typography variant="h1" fontWeight={700}>404</Typography>
				<Typography variant="body2" color="GrayText">
					The page you are trying to access does not exist
				</Typography>
			    <Button sx={{ mt: 3 }} onClick={backPage}>Back page</Button>
			</Grid>
		</Grid>
	);
};

export default Page404View;