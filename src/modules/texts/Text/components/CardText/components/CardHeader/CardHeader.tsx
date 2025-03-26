import { IconButton, useTheme } from "@mui/material";
import { CardHeaderContainer } from "modules/texts/Text/components/CardText/components/CardHeader/card-header.style";
import { FiEye, FiTrash } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";
import { Link } from "react-router-dom";
import { useDialogText } from "modules/texts/Text/shared/hooks/useDialogText";
import React from "react";
import { createURLQueryParams } from "shared/utils/create-url-query-params";
import type { ICardHeader } from "modules/texts/Text/components/CardText/components/CardHeader/types";

const CardHeader: React.FC<ICardHeader> = ({ text_id, board_id }) => {
	const { palette } = useTheme();
	const { openDialogDeleteOneText } = useDialogText();

	const linkToTextEdit = createURLQueryParams("/text/edit", {
		text_id,
		board_id,
	});

	return (
		<CardHeaderContainer>
			<IconButton onClick={() => openDialogDeleteOneText(text_id)}>
				<FiTrash color={palette.error.main} size={ICON_SIZE.MEDIUM} />
			</IconButton>
			<Link to={linkToTextEdit}>
				<IconButton>
					<FiEye size={ICON_SIZE.MEDIUM} />
				</IconButton>
			</Link>
		</CardHeaderContainer>
	);
};

export default CardHeader;
