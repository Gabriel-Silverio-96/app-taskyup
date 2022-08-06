import React from "react";
import useFetchBoard from "shared/common/hook/useFetchBoard";
import BoardView from "./BoardView";

const Board: React.FC = () => {
	const { board, isLoading } = useFetchBoard();
	
	return <BoardView {...{ board, isLoading }} />;
};

export default Board;
