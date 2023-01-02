import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import CardTextView from "./CardTextView";
import { ONE_HOUR_IN_MILLISECOND } from "./constant";
import { fetchTexts } from "./service";

const CardText: React.FC = () => {
	const { palette } = useTheme();
	const { board_id } = useParams();

	const { data } = useQuery(["texts", { variables: board_id }], () => fetchTexts(board_id),
		{ cacheTime: ONE_HOUR_IN_MILLISECOND }
	);

	return <CardTextView {...{ palette, data }} />;
};

export default memo(CardText);
