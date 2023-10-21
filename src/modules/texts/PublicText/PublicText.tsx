import React from "react";
import PublicTextView from "./PublicTextView";
import { useQuery } from "@tanstack/react-query";
import { fetchGetPublicTextService } from "./services";
import { useSearchParams } from "react-router-dom";

const PublicText: React.FC = () => {
	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");

	const queryFn = () => fetchGetPublicTextService({ params: { text_id } });
	const { data } = useQuery(["a"], queryFn);

	return <PublicTextView {...{ data }} />;
};

export default PublicText;
