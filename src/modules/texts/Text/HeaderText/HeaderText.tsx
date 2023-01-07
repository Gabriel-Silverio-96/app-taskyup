import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextText } from "../Context";
import useDialogText from "../hooks/useDialogText";
import HeaderTextView from "./HeaderTextView";

const HeaderText: React.FC = () => {
	const { titleText } = useContextText();
	const { board_id } = useParams();
	const { palette, breakpoints } = useTheme();
	const { openDialogDeleteAllTexts } = useDialogText();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpenMenu = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const closeMenu = () => setAnchorEl(null);

	return (
		<HeaderTextView
			{...{
				titleText,
				palette,
				isMediumScreen,
				anchorEl,
				isOpenMenu,
				openMenu,
				closeMenu,
				openDialogDeleteAllTexts,
				board_id
			}}
		/>
	);
};

export default memo(HeaderText);
