import React, { createContext, useContext, useState } from "react";
import { IContextProviderTextEdit, IContextTextEdit } from "./types";

export const ContextTextEdit = createContext<IContextTextEdit | undefined>(
	undefined
);

export const ContextProviderTextEdit: React.FC<IContextProviderTextEdit> = ({
	children,
}) => {
	const [isOpenDialogShare, setIsOpenDialogShare] = useState(false);

	const value = {
		isOpenDialogShare,
		setIsOpenDialogShare,
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