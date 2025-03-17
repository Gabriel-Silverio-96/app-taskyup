import { Typography } from "@mui/material";
import React from "react";
import type { IMessageError } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/components/MessageError/types";

const MessageError: React.FC<IMessageError> = ({ images }) => {
	const isHidden = Boolean(images.error);

	return (
		<div hidden={!isHidden}>
			<Typography variant="caption">{images.error}</Typography>
		</div>
	);
};

export default MessageError;
