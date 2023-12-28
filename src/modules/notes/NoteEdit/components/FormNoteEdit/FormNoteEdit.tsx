import React from "react";
import FormNoteEditView from "modules/notes/NoteEdit/components/FormNoteEdit/FormNoteEditView";
import { useSearchParams } from "react-router-dom";
import { IFormNoteEdit } from "modules/notes/NoteEdit/components/FormNoteEdit/types";

const FormNoteEdit: React.FC<IFormNoteEdit> = ({
	register,
	handleSubmit,
	mutate,
	errors,
}) => {
	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");

	const linkPreviousPage = `/notes/${board_id}`;

	return (
		<FormNoteEditView
			{...{
				register,
				handleSubmit,
				mutate,
				errors,
				linkPreviousPage,
			}}
		/>
	);
};

export default FormNoteEdit;
