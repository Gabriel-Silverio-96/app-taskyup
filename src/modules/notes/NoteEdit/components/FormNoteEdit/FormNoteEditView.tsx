import { TextField, Button, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React from "react";
import {
	FormHeaderNoteEdit,
	FormActionNoteEdit,
	TextFieldMutiline,
} from "./style";
import ColorPicker from "shared/components/ColorPicker";
import { Link } from "react-router-dom";
import { IFormNoteEditView } from "./types";

const FormNoteEditView: React.FC<IFormNoteEditView> = props => {
	const {
		register,
		handleSubmit,
		handleSubmitNoteEdit,
		errors,
		linkPreviousPage,
		isSaving,
	} = props;

	return (
		<form onSubmit={handleSubmit(handleSubmitNoteEdit)}>
			<Grid container spacing={4}>
				<Grid item md={8} xs={8}>
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
				<Grid item md={4} xs={4} textAlign="right">
					<FormActionNoteEdit>
						<Link to={linkPreviousPage}>
							<Button variant="text" type="button">
								Back
							</Button>
						</Link>
						<LoadingButton
							variant="contained"
							type="submit"
							loading={isSaving}>
							Save
						</LoadingButton>
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
						rows={10}
						error={
							errors.observation && Boolean(errors.observation)
						}
						helperText={
							errors.observation
								? errors.observation?.message
								: ""
						}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default FormNoteEditView;
