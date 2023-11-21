import { Grid } from "@mui/material";
import React from "react";
import Loading from "shared/components/Loading";
import ContentDetail from "modules/texts/PublicText/components/ContentDetail";
import HeaderPublicText from "modules/texts/PublicText/components/HeaderPublicText";
import MarkdownPreview from "modules/texts/PublicText/components/MarkdownPreview";
import { IPublicTextView } from "modules/texts/PublicText/types";

const PublicTextView: React.FC<IPublicTextView> = props => {
	const {
		isFetching,
		data: { author, title_text, created_at, text },
	} = props;

	if (isFetching) return <Loading isLoading backdrop />;

	return (
		<Grid container maxWidth={800} margin="auto">
			<HeaderPublicText />
			<ContentDetail {...{ author, title_text, created_at }} />
			<MarkdownPreview {...{ text }} />
		</Grid>
	);
};

export default PublicTextView;
