import React from "react";
import CardBoard from "./components/CardBoard";
import DialogDeleteOneBoard from "./Dialogs/DialogDeleteOneBoard";
import DialogEditBoard from "./Dialogs/DialogEditBoard";

const BoardView: React.FC = () => {
	return (
		<>
			<CardBoard />
			<DialogEditBoard />
			<DialogDeleteOneBoard />
		</>
	);
};

export default BoardView;
