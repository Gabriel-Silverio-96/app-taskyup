import { useTheme } from "@mui/material";
import { useContextText } from "modules/texts/Text/Context";
import HeaderTextView from "modules/texts/Text/components/HeaderText/HeaderTextView";
import type { IHeaderText } from "modules/texts/Text/components/HeaderText/types";
import { useDialogText } from "modules/texts/Text/shared/hooks/useDialogText";
import React, { memo } from "react";
import { useParams } from "react-router-dom";

const HeaderText: React.FC<IHeaderText> = ({ count, title }) => {
	const { board_id } = useParams();

	const { isOpenTemplates, setIsOpenTemplates } = useContextText();
	const { openDialogDeleteAllTexts } = useDialogText();

	const { palette } = useTheme();

	const toggleTemplatesVisibility = () =>
		setIsOpenTemplates(prevState => !prevState);

	const isDisabledDeleteAllTexts = count === 0;

	const handleOpenDialogDeleteAllTexts = () =>
		openDialogDeleteAllTexts(board_id!);

	const defineColorIcon = isOpenTemplates
		? palette.secondary.main
		: palette.common.white;

	return (
		<HeaderTextView
			{...{
				title,
				handleOpenDialogDeleteAllTexts,
				toggleTemplatesVisibility,
				defineColorIcon,
				isDisabledDeleteAllTexts,
			}}
		/>
	);
};

export default memo(HeaderText);
