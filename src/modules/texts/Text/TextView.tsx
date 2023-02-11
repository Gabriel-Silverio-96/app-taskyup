import React from "react";
import CardText from "./CardText";
import { ContextProviderText } from "./Context";
import DialogDeleteAllText from "./Dialogs/DialogDeleteAllTexts";
import DialogDeleteSingleText from "./Dialogs/DialogDeleteSingleText";
import HeaderText from "./HeaderText";
import Templates from "./Templates";

const TextView: React.FC = () => {
	return (
		<ContextProviderText>
			<HeaderText />
			<Templates />
			<CardText />
			<DialogDeleteSingleText />
			<DialogDeleteAllText />
		</ContextProviderText>
	);
};

export default TextView;