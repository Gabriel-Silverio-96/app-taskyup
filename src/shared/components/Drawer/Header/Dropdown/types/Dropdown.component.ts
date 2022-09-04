export interface IDropdown {
    children: React.ReactNode;
    open: boolean;
}

export interface IDropdownView extends IDropdown {
    logout: () => void;
}