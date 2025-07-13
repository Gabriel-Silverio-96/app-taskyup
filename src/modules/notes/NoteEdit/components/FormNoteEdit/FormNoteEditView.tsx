import { Button, Grid, IconButton, TextField } from "@mui/material";
import type { IFormNoteEditView } from "modules/notes/NoteEdit/components/FormNoteEdit/types";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ICON_SIZE } from "shared/constants";
import {
	FormActionNoteEdit,
	FormHeaderNoteEdit,
	TextFieldMutiline,
} from "modules/notes/NoteEdit/components/FormNoteEdit/form-note-edit.style";
import { fieldErrors } from "shared/utils/field-errors";
import EmojiPicker from "shared/components/EmojiPicker";

const FormNoteEditView: React.FC<IFormNoteEditView> = props => {
	const {
		register,
		handleSubmit,
		mutate,
		errors,
		linkPreviousPage,
		onEmojiClick,
		onEmojiRemove,
		watch,
	} = props;

	return (
		<form onSubmit={handleSubmit(mutate)}>
			<Grid container spacing={2} justifyContent="space-between">
				<Grid item md="auto" xs={9}>
					<FormHeaderNoteEdit>
						<TextField
							{...register("title_note")}
							placeholder="Title note"
							autoComplete="o{ff"
							{...fieldErrors({ errors, field: "title_note" })}
						/>
					</FormHeaderNoteEdit>
				</Grid>
				<Grid item md="auto" xs={3} textAlign="right">
					<FormActionNoteEdit>
						<Link to={linkPreviousPage}>
							<IconButton type="button">
								<FiArrowLeft size={ICON_SIZE.MEDIUM} />
							</IconButton>
						</Link>
						<Button variant="contained" type="submit">
							Save
						</Button>
					</FormActionNoteEdit>
				</Grid>
				<Grid item md={12} xs={12} ml={-0.9} pt={1}>
					<EmojiPicker
						onEmojiClick={onEmojiClick}
						onEmojiRemove={onEmojiRemove}
						emojiUrl={watch("emoji_image_url")}
					/>
				</Grid>
				<Grid item md={12} xs={12} sx={{ mb: 5 }}>
					<TextFieldMutiline
						{...register("observation")}
						placeholder="Observation"
						size="small"
						fullWidth
						multiline
						rows={15}
						spellCheck="false"
						{...fieldErrors({ errors, field: "observation" })}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default FormNoteEditView;
