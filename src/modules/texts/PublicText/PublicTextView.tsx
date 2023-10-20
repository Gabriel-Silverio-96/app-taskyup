import React from "react";
import HeaderPublicText from "./components/HeaderPublicText";
import { Grid } from "@mui/material";
import ContentDetail from "./components/ContentDetail";

const PublicTextView: React.FC<any> = () => {
	return (
		<Grid container maxWidth={800} margin="auto">
			<HeaderPublicText />
			<ContentDetail />
		</Grid>
	);
};

export default PublicTextView;
