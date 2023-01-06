import React from "react";
import CardText from "./CardText";
import { ContextProviderText } from "./Context";
import DialogDeleteSingleText from "./Dialogs/DialogDeleteSingleText";
import HeaderText from "./HeaderText";

const TextView: React.FC<any> = () => {
	return (
		<ContextProviderText>
			<HeaderText />
			<CardText />
			<DialogDeleteSingleText />
		</ContextProviderText>
	);
};

export default TextView;