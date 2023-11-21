import { useQuery } from "@tanstack/react-query";
import PublicTextView from "modules/texts/PublicText/PublicTextView";
import TextNotPublic from "modules/texts/PublicText/components/TextNotPublic";
import { fetchGetPublicTextService } from "modules/texts/PublicText/services";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";

const PublicText: React.FC = () => {
	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");

	const queryFn = () => fetchGetPublicTextService({ params: { text_id } });

	const queryKey = [
		TEXT_QUERY_KEY.FETCH_GET_PUBLIC_TEXT,
		{ variable: text_id },
	];
	const { data, isFetching, status } = useQuery(queryKey, queryFn, {
		retry: false,
	});

	if (status === "error") return <TextNotPublic />;
	if (data === undefined) return null;

	return <PublicTextView {...{ data, isFetching }} />;
};

export default PublicText;
