import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextText } from "modules/texts/Text/Context";
import { useDialogText } from "modules/texts/Text/shared/hooks/useDialogText";
import HeaderTextView from "modules/texts/Text/components/HeaderText/HeaderTextView";
import useFetchGetOneBoard from "shared/common/hook/useFetchGetOneBoard";
import { IHeaderText } from "modules/texts/Text/components/HeaderText/types";

const HeaderText: React.FC<IHeaderText> = ({ count }) => {
	const { board_id } = useParams();
	const { data } = useFetchGetOneBoard(board_id);

	const { isOpenTemplates, setIsOpenTemplates, countText } = useContextText();
	const { openDialogDeleteAllTexts } = useDialogText();

	const { palette, breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const toogleTemplates = () => setIsOpenTemplates(prevState => !prevState);

	const isDisabledDeleteAllTexts = count === 0;

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
				isDisabledDeleteAllTexts,
			}}
		/>
	);
};

export default memo(HeaderText);
