import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { FiTrash, FiUsers } from "react-icons/fi";
import { MdOutlineLightbulb } from "react-icons/md";
import { Nav } from "modules/texts/Text/components/HeaderText/header-text.style";
import type { IHeaderTextView } from "modules/texts/Text/components/HeaderText/types";
import { ICON_SIZE } from "shared/constants";

const HeaderTextView: React.FC<IHeaderTextView> = props => {
	const {
		title,
		handleOpenDialogDeleteAllTexts,
		toggleTemplatesVisibility,
		defineColorIcon,
		isDisabledDeleteAllTexts,
	} = props;

	return (
		<Grid container alignItems="center" sx={{ mb: 3 }}>
			<Grid item xl={6} md={6} sm={8} xs={8}>
				<Typography variant="h6" fontWeight={800}>
					{title}
				</Typography>
			</Grid>
			<Grid item xl={6} md={6} sm={4} xs={4}>
				<Nav>
					<Tooltip arrow title="Templates" placement="top">
						<IconButton onClick={toggleTemplatesVisibility}>
							<MdOutlineLightbulb
								color={defineColorIcon}
								size={ICON_SIZE.MEDIUM}
							/>
						</IconButton>
					</Tooltip>
					<Tooltip arrow title="Members comming soon" placement="top">
						<IconButton>
							<FiUsers size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Tooltip>
					<Tooltip arrow title="Delete texts" placement="top">
						<IconButton
							onClick={handleOpenDialogDeleteAllTexts}
							disabled={isDisabledDeleteAllTexts}>
							<FiTrash size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Tooltip>
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderTextView;
