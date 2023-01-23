import { Button, Grid, IconButton, MenuItem, Skeleton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { FiEdit, FiMoreHorizontal, FiPlus } from "react-icons/fi";
import { Nav } from "./style";
import { IHeaderNoteView } from "./types/HeaderNote.component";
import { Menu } from "./style";

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
					<Button variant="contained" onClick={openDialogNewNote}>
						<FiPlus size={20} />
					</Button>
					<Button variant="outlined" color="inherit" onClick={openMenu}>
						<FiMoreHorizontal size={20} />
					</Button>
					<Menu 
						anchorEl={anchorEl}
						open={isOpenMenu}
						onClose={closeMenu}
						autoFocus={false}
						transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
						anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
						transformOrigin={{ vertical: "top", horizontal: "right" }}
						sx={{ mt: 1 }}
					>
						<Tooltip arrow title="Comming soon" placement="top">
							<MenuItem>Members</MenuItem>
						</Tooltip>
						<MenuItem 
							disabled={totalOfNotes <= 1}
							onClick={openDialogDeleteAllNotesAndCloseMenu} 
							sx={ { color: palette.error.main } }
						>
                            Delete all notes
						</MenuItem>
					</Menu>                    
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderNoteView;