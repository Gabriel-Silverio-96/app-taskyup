import { Typography } from "@mui/material";
import { IMessageNoResultsFound } from "./types";
import React from "react";

const MessageNoResultsFound: React.FC<IMessageNoResultsFound> = ({
	images,
}) => {
	const isHidden = images.total_results !== 0;

	return (
		<div hidden={isHidden}>
			<Typography variant="caption" display="block" textAlign="center">
				No results found
			</Typography>
		</div>
	);
};

export default MessageNoResultsFound;
