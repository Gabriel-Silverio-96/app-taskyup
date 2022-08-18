import { Palette } from "@mui/material";

export interface IHeaderNoteView {
    isOpenMenu: boolean;
    anchorEl: null | HTMLElement;
    openMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
    closeMenu: () => void;
    palette: Palette;
}