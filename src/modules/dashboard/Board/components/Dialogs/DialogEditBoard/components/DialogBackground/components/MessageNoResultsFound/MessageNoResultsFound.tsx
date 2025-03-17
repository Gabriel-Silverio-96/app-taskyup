import { Typography } from "@mui/material";
import type { IMessageNoResultsFound } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/components/MessageNoResultsFound/types";
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
