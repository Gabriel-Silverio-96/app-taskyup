import React from "react";
import FormNoteEditView from "./FormNoteEditView";
import { useSearchParams } from "react-router-dom";
import { IFormNoteEdit } from "./types";

const FormNoteEdit: React.FC<IFormNoteEdit> = ({ register, handleSubmit, noteEditSubmit, errors, isSaving }) => {
	const [ searchParams ] = useSearchParams();
	const board_id = searchParams.get("board_id");

	const linkPreviousPage = `/notes/${board_id}`;

	return <FormNoteEditView {...{ register, handleSubmit, noteEditSubmit, errors, linkPreviousPage, isSaving }} />;
};

export default FormNoteEdit;