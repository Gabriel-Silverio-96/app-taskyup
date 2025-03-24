import { useQuery } from "@tanstack/react-query";
import PublicTextView from "modules/texts/PublicText/PublicTextView";
import TextNotPublic from "modules/texts/PublicText/components/TextNotPublic";
import { getPublicTextService } from "modules/texts/PublicText/services";
import React from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "shared/components/Loading";
import { TEXT_QUERY_KEY } from "shared/constants";

const PublicText: React.FC = () => {
	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");

	const queryFn = () => getPublicTextService({ params: { text_id } });

	const queryKey = [
		TEXT_QUERY_KEY.FETCH_GET_PUBLIC_TEXT,
		{ variable: text_id },
	];
	const { data, isFetching, status } = useQuery(queryKey, queryFn, {
		retry: false,
	});

	if (isFetching) return <Loading isLoading backdrop />;
	if (status === "error") return <TextNotPublic />;

	return <PublicTextView {...{ data, isFetching }} />;
};

export default PublicText;
