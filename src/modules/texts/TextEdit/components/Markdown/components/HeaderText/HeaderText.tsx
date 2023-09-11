import React, { memo } from "react";
import { useSearchParams } from "react-router-dom";
import HeaderTextView from "./HeaderTextView";
import { IHeaderText } from "./types";
import { validateTitleText } from "./utils/validate-title-text";

const HeaderText: React.FC<IHeaderText> = ({
	handleClickSaveText,
	titleBoard,
	titleText,
	onChangeTextTitle,
}) => {
	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");

	const linkPreviousPage = `/texts/${board_id}`;

	const { isError, message } = validateTitleText(titleText);

	return (
		<HeaderTextView
			{...{
				handleClickSaveText,
				titleBoard,
				titleText,
				onChangeTextTitle,
				linkPreviousPage,
				isError,
				message,
			}}
		/>
	);
};

export default memo(HeaderText);
