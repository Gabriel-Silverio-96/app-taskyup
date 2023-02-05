import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextText } from "../Context";
import useDialogText from "../hooks/useDialogText";
import HeaderTextView from "./HeaderTextView";

const HeaderText: React.FC = () => {
	const { board_id } = useParams();
	const { titleText, isOpenTemplates, setIsOpenTemplates } = useContextText();
	const { openDialogDeleteAllTexts } = useDialogText();

	const { palette, breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const toogleTemplates = () => setIsOpenTemplates(prevState => !prevState);

	return (
		<HeaderTextView
			{...{
				titleText,
				palette,
				isMediumScreen,			
				openDialogDeleteAllTexts,
				board_id,
				toogleTemplates,
				isOpenTemplates
			}}
		/>
	);
};

export default memo(HeaderText);
