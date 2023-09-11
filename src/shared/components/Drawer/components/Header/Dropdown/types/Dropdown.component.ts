export interface IDropdown {
    children: React.ReactNode;
    open: boolean;
    toogleDropdown: () => void;
}

export interface IDropdownView extends IDropdown {
    logout: () => void;
    toogleDropdown: () => void;
}