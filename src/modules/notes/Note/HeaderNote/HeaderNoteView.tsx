import { Button, Grid, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import React from "react";
import { FiEdit, FiMoreHorizontal, FiPlus } from "react-icons/fi";
import { Nav } from "./style";
import { IHeaderNoteView } from "./types/HeaderNote.component";

const HeaderNoteView: React.FC<IHeaderNoteView> = (props) => {
	const { isOpenMenu, anchorEl, openMenu, closeMenu, palette } = props;
    
	return (
		<Grid container alignItems="center">
			<Grid item xl={6} md={6} sm={6} xs={12}>
				<Typography variant="h6" fontWeight={800}>
                    Board name
					<IconButton sx={{ ml: 1 }}>
						<FiEdit size={14} color={palette.grey[800]} />
					</IconButton>
				</Typography>
			</Grid>
			<Grid item xl={6} md={6} sm={6} xs={12}>
				<Nav>
					<Button variant="contained">
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
							<MenuItem disabled>
                                Members
							</MenuItem>
						</Tooltip>
						<MenuItem onClick={closeMenu} sx={ { color: palette.error.main } }>
                            Delete all
						</MenuItem>
					</Menu>                    
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderNoteView;