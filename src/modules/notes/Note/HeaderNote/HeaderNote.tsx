import { useTheme } from "@mui/material";
import React, { useState } from "react";
import HeaderNoteView from "./HeaderNoteView";

const HeaderNote: React.FC = () => {
	const { palette } = useTheme();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpenMenu = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const closeMenu = () => setAnchorEl(null);

	return <HeaderNoteView {... { isOpenMenu, anchorEl, openMenu, closeMenu, palette }} />;
};

export default HeaderNote;