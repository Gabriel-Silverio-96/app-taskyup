import React, { createContext, useContext, useState } from "react";
import {
	IContextText,
	IContextProviderText,
	IDialogDeleteSingleText,
	IDialogDeleteAllText,
} from "./types";

export const ContextText = createContext<IContextText | undefined>(undefined);

const INITIAL_STATE_DIALOG_DELETE_SINGLE_TEXT = { open: false, textID: "" };
const INITIAL_STATE_DIALOG_DELETE_ALL_TEXT = { open: false, boardID: "" };

export const ContextProviderText: React.FC<IContextProviderText> = ({
	children,
}) => {
	const [dialogDeleteSingleText, setDialogDeleteSingleText] =
		useState<IDialogDeleteSingleText>(
			INITIAL_STATE_DIALOG_DELETE_SINGLE_TEXT
		);
	const [dialogDeleteAllText, setDialogDeleteAllText] =
		useState<IDialogDeleteAllText>(INITIAL_STATE_DIALOG_DELETE_ALL_TEXT);
	const [countText, setCountText] = useState(0);
	const [isOpenTemplates, setIsOpenTemplates] = useState(false);

	const value = {
		dialogDeleteSingleText,
		setDialogDeleteSingleText,
		dialogDeleteAllText,
		setDialogDeleteAllText,
		countText,
		setCountText,
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
