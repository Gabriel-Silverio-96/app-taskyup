import React, { createContext, useContext, useState } from "react";
import { IContextProviderTextEdit, IContextTextEdit } from "./types";
import { IDataText } from "modules/texts/TextEdit/types";

export const INITIAL_STATE_DATA_TEXT: IDataText = {
	title_board: "",
	title_text: "",
	text: "",
	created_at: "",
	public: false,
};

export const ContextTextEdit = createContext<IContextTextEdit | undefined>(
	undefined
);

export const ContextProviderTextEdit: React.FC<IContextProviderTextEdit> = ({
	children,
}) => {
	const [isOpenDialogShare, setIsOpenDialogShare] = useState(false);
	const [dataText, setDataText] = useState<IDataText>(
		INITIAL_STATE_DATA_TEXT
	);

	const value = {
		isOpenDialogShare,
		setIsOpenDialogShare,
		dataText,
		setDataText,
	};

	return (
		<ContextTextEdit.Provider value={value}>
			{children}
		</ContextTextEdit.Provider>
	);
};

export const useContextTextEdit = () => {
	const context = useContext(ContextTextEdit);
	if (context === undefined) {
		throw new Error(
			"useContextTextEdit must be used within a ContextProviderTextEdit"
		);
	}

	return context;
};
