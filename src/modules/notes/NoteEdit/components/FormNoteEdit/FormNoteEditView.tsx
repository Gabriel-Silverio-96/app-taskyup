import { Button, Grid, IconButton, TextField } from "@mui/material";
import { IFormNoteEditView } from "modules/notes/NoteEdit/components/FormNoteEdit/types";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import ColorPicker from "shared/components/ColorPicker";
import { ICON_SIZE } from "shared/constants";
import {
	FormActionNoteEdit,
	FormHeaderNoteEdit,
	TextFieldMutiline,
} from "./style";

const FormNoteEditView: React.FC<IFormNoteEditView> = props => {
	const { register, handleSubmit, mutate, errors, linkPreviousPage } = props;

	return (
		<form onSubmit={handleSubmit(mutate)}>
			<Grid container spacing={4} justifyContent="space-between">
				<Grid item md="auto" xs={9}>
					<FormHeaderNoteEdit>
						<TextField
							{...register("title_note")}
							placeholder="Title note"
							error={
								errors.title_note && Boolean(errors.title_note)
							}
							helperText={
								errors.title_note
									? errors.title_note?.message
									: ""
							}
							autoComplete="off"
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
				<Grid item md={12} xs={12}>
					<ColorPicker
						{...register("color_note")}
						label="Select color"
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
						error={
							errors.observation && Boolean(errors.observation)
						}
						helperText={
							errors.observation
								? errors.observation?.message
								: ""
						}
						spellCheck="false"
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default FormNoteEditView;
