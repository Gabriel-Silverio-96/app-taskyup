import { Typography } from "@mui/material";
import React from "react";
import { IMessageError } from "./types";

const MessageError: React.FC<IMessageError> = ({ images }) => {
	const isHidden = Boolean(images.error);

	return (
		<div hidden={!isHidden}>
			<Typography variant="caption">{images.error}</Typography>
		</div>
	);
};

export default MessageError;
