import { TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React from "react";
import { FormNoteEdit, FormHeaderNoteEdit, FormActionNoteEdit } from "./style";

const FormNoteEditView: React.FC = () => {
	return (
		<FormNoteEdit>
			<FormHeaderNoteEdit>
				<TextField placeholder="Title note" />
			</FormHeaderNoteEdit>
			<FormActionNoteEdit>
				<Button variant="text" type="button">Back</Button>
				<LoadingButton variant="contained" type="submit">Save</LoadingButton>
			</FormActionNoteEdit>
		</FormNoteEdit>
	);
};

export default FormNoteEditView;