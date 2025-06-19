import React from "react";
import CardBoard from "modules/dashboard/Board/components/CardBoard";
import DialogEditBoard from "modules/dashboard/Board/components/Dialogs/DialogEditBoard";
import DialogDeleteOneBoard from "modules/dashboard/Board/components/Dialogs/DialogDeleteOneBoard";
import { BoardContextProvider } from "modules/dashboard/Board/Context";
import Loading from "shared/components/Loading";
import DoodleMessage from "shared/components/DoodleMessage";
import type { IBoardView } from "modules/dashboard/Board/types";

const BoardView: React.FC<IBoardView> = props => {
	const { data, isFetching, isShowDoodleMessage } = props;

	return (
		<BoardContextProvider>
			<Loading isLoading={isFetching} backdrop />
			<DoodleMessage
				show={isShowDoodleMessage}
				title="You have not created any board"
				message="Create a board 😊"
			/>
			<CardBoard {...{ data, isFetching }} />
			<DialogEditBoard />
			<DialogDeleteOneBoard />
		</BoardContextProvider>
	);
};

export default BoardView;
