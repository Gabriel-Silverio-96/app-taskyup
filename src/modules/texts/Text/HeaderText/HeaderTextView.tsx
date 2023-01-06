import { Button, Grid, MenuItem, Tooltip, Typography } from "@mui/material";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Nav, Menu } from "./style";
import { IHeaderTextView } from "./types/HeaderText.component";

const HeaderTextView: React.FC<IHeaderTextView> = (props) => {
	const { 
		palette, 
		isMediumScreen, 
		anchorEl, 
		isOpenMenu, 
		openMenu, 
		closeMenu, 
		openDialogDeleteAllTexts,
		board_id
	} = props;

	const variantMediumScreen = isMediumScreen ? "body1" : "h6";

	return (
		<Grid container alignItems="center" sx={{ mb: 3 }}>
			<Grid item xl={6} md={6} sm={8} xs={8}>
				<Typography variant={variantMediumScreen} fontWeight={800}>
					Title
				</Typography>
			</Grid>
			<Grid item xl={6} md={6} sm={4} xs={4}>
				<Nav>
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
							sx={ { color: palette.error.main } }
							onClick={() => {
								openDialogDeleteAllTexts(board_id!);
								closeMenu();
							}}
						>
                            Delete all texts
						</MenuItem>
					</Menu>   
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderTextView;