import { LoadingButton } from "@mui/lab";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	TextField,
	Typography
} from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Date from "shared/components/Date";
import Loading from "shared/components/Loading";
import DialogBackground	from "./DialogBackground";
import { IDialogEditBoardView } from "./types/DialogEditBoard.component";

const DialogEditBoardView: React.FC<IDialogEditBoardView> = props => {
	const {
		register,
		fullScreen,
		handleSubmit,
		fetchDialogEditBoard,
		errors,
		isLoading,
		isSaving,
		isOpenDialogEditBoard,
		closeDialogEditBoard,		
	} = props;

	const loadingGrid = { display: isLoading ? "flex" : "none", mb: 5 };

	return (
		<Dialog 
			fullWidth
			maxWidth="xs"
			open={isOpenDialogEditBoard}
			fullScreen={fullScreen}
			onClose={!isSaving && !isLoading ? closeDialogEditBoard : () => ""}
		>
			<DialogTitle>
				<Grid container alignItems="center" justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>Edit Board</Typography>
					</Grid>
					<Grid item> 
						<IconButton onClick={closeDialogEditBoard} disabled={isLoading || isSaving}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<Grid container justifyContent="center" sx={loadingGrid}>
				<Loading isLoading={isLoading} message="Loading" />
			</Grid>
			{!isLoading && (
				<>
					<DialogContent sx={{ pt: 0 }}>
						<DialogBackground />
						<form
							id="form-new-board"
							onSubmit={handleSubmit(fetchDialogEditBoard)}>
							<Grid container direction="column" spacing={5}>						
								<Grid item>
									<TextField 
										label="Board name"
										size="small"
										fullWidth
										{...register("title")}
										error={errors.title && Boolean(errors.title)}
										helperText={errors.title ? errors.title?.message : ""}
										inputProps={{
											"data-testid": "input-edit"
										}}
									/>
								</Grid>
							</Grid>
						</form>
					</DialogContent>
					<DialogActions>
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item md="auto">
								<Typography 
									variant="caption" 
									color="GrayText" 
									display="flex" 
									alignItems="center" sx={{ gap: 0.5 } }
								>
									Created at
									<Date {...register("created_at")} />
								</Typography>
							</Grid>
							<Grid item md="auto">
								<LoadingButton 							
									form="form-new-board"
									variant="contained"
									type="submit"
									loading={isSaving}
								>
									Save
								</LoadingButton>				
							</Grid>
						</Grid>
					</DialogActions>
				</>
			)}
		</Dialog>
	);
};

export default DialogEditBoardView;