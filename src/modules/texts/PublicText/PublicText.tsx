import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";
import PublicTextView from "./PublicTextView";
import TextNotPublic from "./components/TextNotPublic";
import { fetchGetPublicTextService } from "./services";

const PublicText: React.FC = () => {
	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");

	const queryFn = () => fetchGetPublicTextService({ params: { text_id } });

	const queryKey = [
		TEXT_QUERY_KEY.FETCH_GET_PUBLIC_TEXT,
		{ variable: text_id },
	];
	const { data, isFetching } = useQuery(queryKey, queryFn);

	if (data === undefined) return <TextNotPublic />;

	return <PublicTextView {...{ data, isFetching }} />;
};

export default PublicText;
