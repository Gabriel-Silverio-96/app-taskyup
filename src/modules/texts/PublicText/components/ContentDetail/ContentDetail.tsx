import { Grid, Typography } from "@mui/material";
import React from "react";
import dateFormat from "shared/util/dateFormat";

const ContentDetailView: React.FC<any> = props => {
	const { title_text, author, created_at } = props;

	const date = dateFormat(created_at);

	return (
		<Grid container flexDirection="column" sx={{ mb: 5 }}>
			<Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
				{title_text}
			</Typography>

			<Typography variant="caption" sx={{ mb: 1 }}>
				<strong>Author:</strong> {author}
			</Typography>

			<Typography variant="caption">
				<strong>Created:</strong> {date}
			</Typography>
		</Grid>
	);
};

export default ContentDetailView;
