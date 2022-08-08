import React from "react";
import BoardView from "./BoardView";
import { ContextProviderBoard } from "./Context";

const Board: React.FC = () => {	
	return (
		<ContextProviderBoard>
			<BoardView />
		</ContextProviderBoard>
	);
};

export default Board;
