import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
import HeaderTextView from "./HeaderTextView";
import { IHeaderText } from "./types/HeaderText.component";

const HeaderText: React.FC<IHeaderText> = ({ saveText, titleBoard, titleText, onChangeTextTitle }) => {	
	const [ searchParams ] = useSearchParams();
	const board_id = searchParams.get("board_id");

	const backPage = `/texts/${board_id}`;

	const disableButtonSave = titleText.length < 3;
	const handleMessageError = titleText.length < 3 && "Minimum of 3 characters";

	return (
		<HeaderTextView
			{...{
				saveText,
				titleBoard,
				titleText,
				onChangeTextTitle,
				backPage,
				disableButtonSave,
				handleMessageError,
			}}
		/>
	);
};

export default memo(HeaderText);
