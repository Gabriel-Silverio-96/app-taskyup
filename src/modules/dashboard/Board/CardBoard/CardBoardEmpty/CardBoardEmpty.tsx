import React, { memo } from "react";
import CardBoardEmptyView from "./CardBoardEmptyView";
import { ICardBoardEmpty } from "./types/CardBoardEmpty.component";

const CardBoardEmpty: React.FC<ICardBoardEmpty> = ({ board }) => {
	return <CardBoardEmptyView {...{ board }} />;
};

export default memo(CardBoardEmpty);
