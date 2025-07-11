import React from "react";
import FormNoteEditView from "modules/notes/NoteEdit/components/FormNoteEdit/FormNoteEditView";
import { useSearchParams } from "react-router-dom";
import type { IFormNoteEdit } from "modules/notes/NoteEdit/components/FormNoteEdit/types";
import { EmojiClickData } from "emoji-picker-react";

const FormNoteEdit: React.FC<IFormNoteEdit> = ({
	register,
	handleSubmit,
	mutate,
	errors,
	setValue,
	watch,
}) => {
	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");

	const linkPreviousPage = `/notes/${board_id}`;

	const onEmojiClick = ({ imageUrl }: EmojiClickData) => {
		setValue("emoji_image_url", imageUrl);
	};

	const onEmojiRemove = () => {
		setValue("emoji_image_url", "");
	};

	return (
		<FormNoteEditView
			{...{
				register,
				handleSubmit,
				mutate,
				errors,
				linkPreviousPage,
				onEmojiClick,
				onEmojiRemove,
				watch,
			}}
		/>
	);
};

export default FormNoteEdit;
