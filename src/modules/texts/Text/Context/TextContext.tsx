import React, { createContext, useContext, useState } from "react";
import type {
	ITextContext,
	ITextContextProvider,
	IDialogDeleteSingleText,
	IDialogDeleteAllText,
} from "modules/texts/Text/Context/types";

export const TextContext = createContext<ITextContext | undefined>(undefined);

const INITIAL_STATE_DIALOG_DELETE_ONE_TEXT = { open: false, textID: "" };
const INITIAL_STATE_DIALOG_DELETE_ALL_TEXT = { open: false, boardID: "" };

export const TextContextProvider: React.FC<ITextContextProvider> = ({
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
		<TextContext.Provider value={value}>{children}</TextContext.Provider>
	);
};

export const useTextContext = () => {
	const context = useContext(TextContext);
	if (context === undefined) {
		throw new Error(
			"useTextContext must be used within a TextContextProvider"
		);
	}

	return context;
};
