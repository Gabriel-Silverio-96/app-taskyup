import React from "react";
import CardText from "./CardText";
import DialogDeleteSingleText from "./Dialogs/DialogDeleteSingleText";
import HeaderText from "./HeaderText";

const TextView: React.FC<any> = () => {
	return (
		<>
			<HeaderText />
			<CardText />
			<DialogDeleteSingleText />
		</>
	);
};

export default TextView;