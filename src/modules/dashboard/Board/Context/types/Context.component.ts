import React from "react";

export interface IContextProviderBoard {
    children: React.ReactNode;
}

export interface IContextBoard {
    boardID: string;
    setBoardID: React.Dispatch<React.SetStateAction<string>>;
}