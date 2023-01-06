import React from "react";
import CardText from "./CardText";
import { ContextProviderText } from "./Context";
import DialogDeleteAllText from "./Dialogs/DialogDeleteAllTexts";
import DialogDeleteSingleText from "./Dialogs/DialogDeleteSingleText";
import HeaderText from "./HeaderText";

const TextView: React.FC<any> = () => {
	return (
		<ContextProviderText>
			<HeaderText />
			<CardText />
			<DialogDeleteSingleText />
			<DialogDeleteAllText />
		</ContextProviderText>
	);
};

export default TextView;