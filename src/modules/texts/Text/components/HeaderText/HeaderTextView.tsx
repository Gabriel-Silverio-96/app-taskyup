import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { FiTrash, FiUsers } from "react-icons/fi";
import { MdOutlineLightbulb } from "react-icons/md";
import { Nav } from "modules/texts/Text/components/HeaderText/style";
import { IHeaderTextView } from "modules/texts/Text/components/HeaderText/types";
import { ICON_SIZE } from "shared/constants";

const HeaderTextView: React.FC<IHeaderTextView> = props => {
	const {
		title,
		palette,
		isMediumScreen,
		handleOpenDialogDeleteAllTexts,
		toggleTemplatesVisibility,
		isOpenTemplates,
		isDisabledDeleteAllTexts,
	} = props;

	const variantMediumScreen = isMediumScreen ? "body1" : "h6";
	const lightColorIcon = isOpenTemplates
		? palette.secondary.main
		: palette.common.white;

	return (
		<Grid container alignItems="center" sx={{ mb: 3 }}>
			<Grid item xl={6} md={6} sm={8} xs={8}>
				<Typography variant={variantMediumScreen} fontWeight={800}>
					{title}
				</Typography>
			</Grid>
			<Grid item xl={6} md={6} sm={4} xs={4}>
				<Nav>
					<IconButton onClick={toggleTemplatesVisibility}>
						<MdOutlineLightbulb
							color={lightColorIcon}
							size={ICON_SIZE.MEDIUM}
						/>
					</IconButton>
					<Tooltip arrow title="Members comming soon" placement="top">
						<IconButton>
							<FiUsers size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Tooltip>
					<IconButton
						onClick={handleOpenDialogDeleteAllTexts}
						disabled={isDisabledDeleteAllTexts}>
						<FiTrash size={ICON_SIZE.MEDIUM} />
					</IconButton>
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderTextView;
