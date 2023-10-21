import { Grid, Typography } from "@mui/material";
import React from "react";
import dateFormat from "shared/util/dateFormat";

const ContentDetailView: React.FC = () => {
	const date = dateFormat(new Date().toDateString());

	return (
		<Grid container flexDirection="column" sx={{ mb: 5 }}>
			<Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500
			</Typography>

			<Typography variant="caption" sx={{ mb: 1 }}>
				<strong>Author:</strong> Gabriel Silvério
			</Typography>

			<Typography variant="caption">
				<strong>Created:</strong> {date}
			</Typography>
		</Grid>
	);
};

export default ContentDetailView;
