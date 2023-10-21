import React from "react";
import HeaderPublicText from "./components/HeaderPublicText";
import { Grid } from "@mui/material";
import ContentDetail from "./components/ContentDetail";
import MarkdownPreview from "./components/MarkdownPreview";

const PublicTextView: React.FC<any> = ({ data }) => {
	const { author, title_text, created_at } = data;

	return (
		<Grid container maxWidth={800} margin="auto">
			<HeaderPublicText />
			<ContentDetail {...{ author, title_text, created_at }} />
			<MarkdownPreview />
		</Grid>
	);
};

export default PublicTextView;
