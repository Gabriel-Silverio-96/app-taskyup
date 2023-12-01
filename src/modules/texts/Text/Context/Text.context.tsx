import React, { createContext, useContext, useState } from "react";
import {
	IContextText,
	IContextProviderText,
	IDialogDeleteSingleText,
	IDialogDeleteAllText,
} from "./types";

export const ContextText = createContext<IContextText | undefined>(undefined);

const INITIAL_STATE_DIALOG_DELETE_ONE_TEXT = { open: false, textID: "" };
const INITIAL_STATE_DIALOG_DELETE_ALL_TEXT = { open: false, boardID: "" };

export const ContextProviderText: React.FC<IContextProviderText> = ({
	children,
}) => {
	const [dialogDeleteOneText, setDialogDeleteOneText] =
		useState<IDialogDeleteSingleText>(INITIAL_STATE_DIALOG_DELETE_ONE_TEXT);
	const [dialogDeleteAllText, setDialogDeleteAllText] =
		useState<IDialogDeleteAllText>(INITIAL_STATE_DIALOG_DELETE_ALL_TEXT);
	const [isOpenTemplates, setIsOpenTemplates] = useState(false);

	const value = {
		dialogDeleteOneText,
		setDialogDeleteOneText,
		dialogDeleteAllText,
		setDialogDeleteAllText,
		isOpenTemplates,
		setIsOpenTemplates,
	};

	return (
		<ContextText.Provider value={value}>{children}</ContextText.Provider>
	);
};

export const useContextText = () => {
	const context = useContext(ContextText);
	if (context === undefined) {
		throw new Error(
			"useContextText must be used within a ContextProviderText"
		);
	}

	return context;
};
