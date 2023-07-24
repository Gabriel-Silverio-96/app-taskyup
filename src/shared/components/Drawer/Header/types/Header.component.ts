export interface IHeaderView {
    isOpen: boolean;
    currentPageTitle: string | undefined;
    toogleDropdown: () => void;
    toogleDropdownAway: () => void;
    handleClickOpenDialogSearchAll: () => void;
}