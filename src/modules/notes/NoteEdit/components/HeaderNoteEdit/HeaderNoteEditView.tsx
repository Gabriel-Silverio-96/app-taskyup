import { TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React from "react";
import { HeaderNoteEdit, HeaderNoteContent, HeaderNoteEditAction } from "./style";

const HeaderNoteEditView: React.FC = () => {
	return (
		<HeaderNoteEdit>
			<HeaderNoteContent>
				<TextField placeholder="Title note" />
			</HeaderNoteContent>
			<HeaderNoteEditAction>
				<Button variant="text">Back</Button>
				<LoadingButton variant="contained">Save</LoadingButton>
			</HeaderNoteEditAction>
		</HeaderNoteEdit>
	);
};

export default HeaderNoteEditView;