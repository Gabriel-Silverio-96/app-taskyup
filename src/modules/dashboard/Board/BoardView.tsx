import React from "react";
import CardBoard from "./components/CardBoard";
import DialogEditBoard from "./components/Dialogs/DialogEditBoard/DialogEditBoard";
import DialogDeleteOneBoard from "./components/Dialogs/DialogDeleteOneBoard/DialogDeleteOneBoard";

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
