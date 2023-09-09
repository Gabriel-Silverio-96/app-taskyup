import React from "react";
import CardText from "./components/CardText";
import { ContextProviderText } from "./Context";
import DialogDeleteAllText from "./components/Dialogs/DialogDeleteAllTexts";
import DialogDeleteOneText from "./components/Dialogs/DialogDeleteOneText";
import HeaderText from "./components/HeaderText";
import Templates from "./components/Templates";

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
