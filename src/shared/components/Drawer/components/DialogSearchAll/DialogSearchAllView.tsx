import {
	Dialog,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { TextFieldWithIconButton } from "./style";
import TableDialogSearchAll from "./components/TableDialogSearchAll/TableDialogSearchAll";
import { DialogSearchAllView } from "./types";

const DialogSearchAllView: React.FC<DialogSearchAllView> = props => {
	const {
		register,
		handleSubmit,
		dialogSearchAllSubmit,
		errors,
		dialogSearchAll,
		handleClickCloseDialogSearchAll,
		data,
		isLoading,
		paginationModel, 
		setPaginationModel
	} = props;

	return (
		<Dialog fullWidth maxWidth="md" open={dialogSearchAll.open}>
			<DialogTitle>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>
							Search
						</Typography>
					</Grid>
					<Grid item>
						<IconButton onClick={handleClickCloseDialogSearchAll}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<form onSubmit={handleSubmit(dialogSearchAllSubmit)}>
					<Grid container>
						<Grid item md>
							<TextFieldWithIconButton>
								<TextField
									label="What you looking for?"
									variant="standard"
									fullWidth
									{...register("query")}
									error={errors.query && Boolean(errors.query)}
									helperText={errors.query ? errors.query?.message: ""}
									autoComplete="off"
								/>
								<IconButton type="submit">
									<BiSearch size={18} />
								</IconButton>
							</TextFieldWithIconButton>
						</Grid>
					</Grid>
				</form>
				<TableDialogSearchAll {...{ data, isLoading, paginationModel, setPaginationModel }} />
			</DialogContent>
		</Dialog>
	);
};

export default DialogSearchAllView;