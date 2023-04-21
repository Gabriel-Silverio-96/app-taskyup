import { Grid, IconButton, Skeleton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { FiPlus, FiTrash, FiUsers } from "react-icons/fi";
import { Nav } from "./style";
import { IHeaderNoteView } from "./types/HeaderNote.component";

const HeaderNoteView: React.FC<IHeaderNoteView> = (props) => {
	const { 
		isOpenMenu, 
		totalOfNotes,
		openDialogNewNote, 
		openDialogDeleteAllNotesAndCloseMenu, 
		anchorEl, 
		openMenu, 
		closeMenu, 
		isMediumScreen,
		palette, 
		data,
		isFetching
	} = props;
	
	const variantMediumScreen = isMediumScreen ? "body1" : "h6";
	const title = data && data.title;

	return (
		<Grid container alignItems="center" sx={{ mb: 3 }}>
			<Grid item xl={6} md={6} sm={8} xs={8}>
				{isFetching ? (
					<Skeleton variant="rectangular" width={210} height={32} />
				) : (
					<Typography variant={variantMediumScreen} fontWeight={800}>
						{title}
					</Typography>
				)}
			</Grid>
			<Grid item xl={6} md={6} sm={4} xs={4}>
				<Nav>
					<IconButton onClick={openDialogNewNote}>
						<FiPlus size={18} />
					</IconButton>
					<Tooltip arrow title="Members comming soon" placement="top">
						<IconButton>
							<FiUsers size={18} />
						</IconButton>
					</Tooltip>
					<IconButton disabled={totalOfNotes <= 1} onClick={openDialogDeleteAllNotesAndCloseMenu}>
						<FiTrash size={18} />
					</IconButton>					                  
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderNoteView;