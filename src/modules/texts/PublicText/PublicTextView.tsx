import React from "react";
import HeaderPublicText from "./components/HeaderPublicText";
import { Grid } from "@mui/material";
import ContentDetail from "./components/ContentDetail";
import MarkdownPreview from "./components/MarkdownPreview";
import Loading from "shared/components/Loading";

const PublicTextView: React.FC<any> = props => {
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
