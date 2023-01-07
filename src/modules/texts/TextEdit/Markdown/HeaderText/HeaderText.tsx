import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
import HeaderTextView from "./HeaderTextView";
import { IHeaderText } from "./types/HeaderText.component";

const HeaderText: React.FC<IHeaderText> = ({ saveText, titleText, onChangeTextTitle }) => {	
	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");

	const backPage = `/texts/${board_id}`;

	return <HeaderTextView {...{ saveText, titleText, onChangeTextTitle, backPage }} />;
};

export default memo(HeaderText);
