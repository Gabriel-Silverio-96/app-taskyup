import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextText } from "../Context";
import useDialogText from "../hooks/useDialogText";
import HeaderTextView from "./HeaderTextView";
import useFetchGetSingleBoard from "shared/common/hook/useFetchGetSingleBoard";

const HeaderText: React.FC = () => {
	const { board_id } = useParams();
	const { data } = useFetchGetSingleBoard(board_id);
	const { isOpenTemplates, setIsOpenTemplates } = useContextText();
	const { openDialogDeleteAllTexts } = useDialogText();

	const { palette, breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const toogleTemplates = () => setIsOpenTemplates(prevState => !prevState);

	return (
		<HeaderTextView
			{...{
				data,
				palette,
				isMediumScreen,			
				openDialogDeleteAllTexts,
				board_id,
				toogleTemplates,
				isOpenTemplates,
			}}
		/>
	);
};

export default memo(HeaderText);
