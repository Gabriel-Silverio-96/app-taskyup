import { Grid } from "@mui/material";
import ContentDetail from "modules/texts/PublicText/components/ContentDetail";
import HeaderPublicText from "modules/texts/PublicText/components/HeaderPublicText";
import MarkdownPreview from "modules/texts/PublicText/components/MarkdownPreview";
import type { IPublicTextView } from "modules/texts/PublicText/types";
import React from "react";

const PublicTextView: React.FC<IPublicTextView> = props => {
	const {
		data: { author, title_text, created_at, text },
	} = props;

	return (
		<Grid container maxWidth={800} margin="auto">
			<HeaderPublicText />
			<ContentDetail {...{ author, title_text, created_at }} />
			<MarkdownPreview {...{ text }} />
		</Grid>
	);
};

export default PublicTextView;
