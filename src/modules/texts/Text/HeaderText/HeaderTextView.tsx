import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { FiTrash, FiUsers } from "react-icons/fi";
import { MdOutlineLightbulb } from "react-icons/md";
import { Nav } from "./style";
import { IHeaderTextView } from "./types/HeaderText.component";

const HeaderTextView: React.FC<IHeaderTextView> = (props) => {
	const { 
		data,
		countText, 
		palette,
		isMediumScreen, 
		openDialogDeleteAllTexts,
		board_id,
		toogleTemplates,
		isOpenTemplates,
	} = props;

	const variantMediumScreen = isMediumScreen ? "body1" : "h6";
	const lightColorIcon = isOpenTemplates ? palette.secondary.main : palette.common.white;

	return (
		<Grid container alignItems="center" sx={{ mb: 3 }}>
			<Grid item xl={6} md={6} sm={8} xs={8}>
				<Typography variant={variantMediumScreen} fontWeight={800}>
					{data?.title}
				</Typography>
			</Grid>
			<Grid item xl={6} md={6} sm={4} xs={4}>
				<Nav>
					<IconButton onClick={toogleTemplates}>
						<MdOutlineLightbulb color={lightColorIcon} size={18} />
					</IconButton>
					<Tooltip arrow title="Members comming soon" placement="top">
						<IconButton>
							<FiUsers size={18} />
						</IconButton>
					</Tooltip>
					<IconButton onClick={() => openDialogDeleteAllTexts(board_id!)} disabled={countText === 0}>
						<FiTrash size={18} />
					</IconButton>
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderTextView;