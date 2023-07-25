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

const DialogSearchAllView: React.FC<any> = (props) => {
	const { dialogSearchAll, handleClickCloseDialogSearchAll } = props;

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
				<form>
					<Grid container>
						<Grid item md>
							<TextFieldWithIconButton>
								<TextField label="What you looking for?" variant="standard" fullWidth />
								<IconButton>
									<BiSearch size={18} />
								</IconButton>            
							</TextFieldWithIconButton>                
						</Grid>
					</Grid>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default DialogSearchAllView;
