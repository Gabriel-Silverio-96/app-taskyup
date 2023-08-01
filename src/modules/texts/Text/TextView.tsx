import React from "react";
import CardText from "./CardText";
import { ContextProviderText } from "./Context";
import DialogDeleteAllText from "./Dialogs/DialogDeleteAllTexts";
import DialogDeleteOneText from "./Dialogs/DialogDeleteOneText";
import HeaderText from "./HeaderText";
import Templates from "./Templates";

const TextView: React.FC = () => {
	return (
		<ContextProviderText>
			<HeaderText />
			<Templates />
			<CardText />
			<DialogDeleteOneText />
			<DialogDeleteAllText />
		</ContextProviderText>
	);
};

export default TextView;