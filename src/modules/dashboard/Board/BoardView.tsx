import React from "react";
import CardBoard from "./CardBoard";
import DialogDeleteSingleBoard from "./Dialogs/DialogDeleteSingleBoard";
import DialogEditBoard from "./DialogEditBoard";

const BoardView: React.FC = () => {
	return (
		<>
			<CardBoard />	
			<DialogEditBoard />	
			<DialogDeleteSingleBoard />	
		</>		 
	);
};

export default BoardView;