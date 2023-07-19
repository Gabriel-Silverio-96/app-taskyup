import { TextField, Button, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import React from "react";
import { FormHeaderNoteEdit, FormActionNoteEdit, TextFieldMultiple } from "./style";
import ColorPicker from "shared/components/ColorPicker";

const FormNoteEditView: React.FC<any> = ({register, handleSubmit, noteEditSubmit, errors}) => {
	
	return (
		<form onSubmit={handleSubmit(noteEditSubmit)}>
			<Grid container spacing={4}>
				<Grid item md={8} xs={8}>
					<FormHeaderNoteEdit>
						<TextField 
							{...register("title_note")} 
							placeholder="Title note" 
							error={errors.title_note && Boolean(errors.title_note)}
							helperText={errors.title_note ? errors.title_note?.message : ""}
						/>
					</FormHeaderNoteEdit>
				</Grid>
				<Grid item md={4} xs={4} textAlign="right">
					<FormActionNoteEdit>
						<Button variant="text" type="button">Back</Button>
						<LoadingButton variant="contained" type="submit">Save</LoadingButton>
					</FormActionNoteEdit>
				</Grid>
				<Grid item md={12} xs={12}>
					<ColorPicker {...register("color_note")} label="Select color" />
				</Grid>
				<Grid item md={12} xs={12}>
					<TextFieldMultiple 
						{...register("observation")}
						placeholder="Observation"
						size="small"
						fullWidth
						multiline
						rows={10}
						error={errors.observation && Boolean(errors.observation)}
						helperText={errors.observation ? errors.observation?.message : ""}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default FormNoteEditView;