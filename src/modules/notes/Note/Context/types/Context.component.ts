import React from "react";

export interface IContextProviderNote {
    children: React.ReactNode;
}

export interface IContextNote {
    isOpenDialogNewNote: boolean;
    setIsOpenDialogNewNote: React.Dispatch<React.SetStateAction<boolean>>;
}