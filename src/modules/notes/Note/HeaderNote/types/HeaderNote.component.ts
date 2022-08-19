import { Palette } from "@mui/material";
import { IFetchSingleBoard } from "shared/common/types/Fetch";

export interface IHeaderNoteView {
    isOpenMenu: boolean;
    anchorEl: null | HTMLElement;
    openMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
    closeMenu: () => void;
    palette: Palette;
    data: IFetchSingleBoard | undefined;
}