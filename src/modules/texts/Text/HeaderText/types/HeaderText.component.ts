import { Palette } from "@mui/material";

export interface IHeaderTextView {
	palette: Palette;
	isMediumScreen: boolean;
	anchorEl: null | HTMLElement;
	isOpenMenu: boolean;
	openMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
	closeMenu: () => void;
}
