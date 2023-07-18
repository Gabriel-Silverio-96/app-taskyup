import { TextField, Button, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React from "react";
import { FormHeaderNoteEdit, FormActionNoteEdit, TextFieldMultiple } from "./style";
import ColorPicker from "shared/components/ColorPicker";

const FormNoteEditView: React.FC = () => {
	return (
		<Grid container spacing={4}>
			<Grid item md={8} xs={8}>
				<FormHeaderNoteEdit>
					<TextField placeholder="Title note" />
				</FormHeaderNoteEdit>
			</Grid>
			<Grid item md={4} xs={4} textAlign="right">
				<FormActionNoteEdit>
					<Button variant="text" type="button">Back</Button>
					<LoadingButton variant="contained" type="submit">Save</LoadingButton>
				</FormActionNoteEdit>
			</Grid>
			<Grid item md={12} xs={12}>
				<ColorPicker label="Select color" />
			</Grid>
			<Grid item md={12} xs={12}>
				<TextFieldMultiple 
					placeholder="Observation"
					size="small"
					fullWidth
					multiline
					rows={10}
				/>
			</Grid>
		</Grid>
	);
};

export default FormNoteEditView;