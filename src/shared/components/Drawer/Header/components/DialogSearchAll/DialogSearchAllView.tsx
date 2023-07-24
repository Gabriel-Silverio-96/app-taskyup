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

const DialogSearchAllView: React.FC<any> = () => {
	return (
		<Dialog fullWidth maxWidth="md" open>
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
						<IconButton>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<form>
					<Grid container>
						<Grid item md>
							<TextField label="What you looking for?" variant="standard" fullWidth />
							<IconButton>
								<BiSearch size={18} />
							</IconButton>                            
						</Grid>
					</Grid>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default DialogSearchAllView;
