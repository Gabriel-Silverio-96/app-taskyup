import { Grid } from "@mui/material";
import React from "react";
import Loading from "shared/components/Loading";
import ContentDetail from "./components/ContentDetail";
import HeaderPublicText from "./components/HeaderPublicText";
import MarkdownPreview from "./components/MarkdownPreview";

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
