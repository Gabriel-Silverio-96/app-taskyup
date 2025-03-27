import React, { createContext, useContext, useState } from "react";
import type {
	ITextEditContextProvider,
	ITextEditContext,
} from "modules/texts/TextEdit/Context/types";
import type { IDataText } from "modules/texts/TextEdit/types";

export const INITIAL_STATE_DATA_TEXT: IDataText = {
	title_board: "",
	title_text: "",
	text: "",
	created_at: "",
	public: false,
};

export const TextEditContext = createContext<ITextEditContext | undefined>(
	undefined
);

export const TextEditContextProvider: React.FC<ITextEditContextProvider> = ({
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
		<TextEditContext.Provider value={value}>
			{children}
		</TextEditContext.Provider>
	);
};

export const useTextEditContext = () => {
	const context = useContext(TextEditContext);
	if (context === undefined) {
		throw new Error(
			"useTextEditContext must be used within a TextEditContextProvider"
		);
	}

	return context;
};
