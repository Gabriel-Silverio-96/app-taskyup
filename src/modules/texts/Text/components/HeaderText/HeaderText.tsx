import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextText } from "modules/texts/Text/Context";
import { useDialogText } from "modules/texts/Text/shared/hooks/useDialogText";
import HeaderTextView from "./HeaderTextView";
import useFetchGetOneBoard from "shared/common/hook/useFetchGetOneBoard";

const HeaderText: React.FC = () => {
	const { board_id } = useParams();
	const { data } = useFetchGetOneBoard(board_id);
	const { isOpenTemplates, setIsOpenTemplates, countText } = useContextText();
	const { openDialogDeleteAllTexts } = useDialogText();

	const { palette, breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const toogleTemplates = () => setIsOpenTemplates(prevState => !prevState);

	return (
		<HeaderTextView
			{...{
				data,
				countText,
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