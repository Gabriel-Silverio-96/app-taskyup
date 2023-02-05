import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextText } from "../Context";
import useDialogText from "../hooks/useDialogText";
import HeaderTextView from "./HeaderTextView";

const HeaderText: React.FC = () => {
	const { board_id } = useParams();
	const { titleText } = useContextText();
	const { openDialogDeleteAllTexts } = useDialogText();

	const { palette, breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	return (
		<HeaderTextView
			{...{
				titleText,
				palette,
				isMediumScreen,			
				openDialogDeleteAllTexts,
				board_id
			}}
		/>
	);
};

export default memo(HeaderText);
