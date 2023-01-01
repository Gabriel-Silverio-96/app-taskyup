import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo, useState } from "react";
import HeaderTextView from "./HeaderTextView";

const HeaderText: React.FC = () => {
	const { palette, breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpenMenu = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const closeMenu = () => setAnchorEl(null);

	return <HeaderTextView {...{ palette, isMediumScreen, anchorEl, isOpenMenu, openMenu, closeMenu }} />;
};

export default memo(HeaderText);
