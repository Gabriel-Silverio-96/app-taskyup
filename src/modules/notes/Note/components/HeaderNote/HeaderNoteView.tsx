import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { FiPlus, FiTrash, FiUsers } from "react-icons/fi";
import { Nav } from "./style";
import { IHeaderNoteView } from "./types";
import Loading from "shared/components/Loading/Loading";
import { ICON_SIZE } from "shared/constants";

const HeaderNoteView: React.FC<IHeaderNoteView> = props => {
	const {
		data,
		openDialogDeleteAllNotes,
		isMediumScreen,
		countNotes,
		handleClickCreateNote,
		isLoading,
	} = props;

	const variantMediumScreen = isMediumScreen ? "body1" : "h6";

	return (
		<>
			<Loading isLoading={isLoading} backdrop message="Creating note" />
			<Grid container alignItems="center" sx={{ mb: 3 }}>
				<Grid item xl={6} md={6} sm={8} xs={8}>
					<Typography variant={variantMediumScreen} fontWeight={800}>
						{data?.title}
					</Typography>
				</Grid>
				<Grid item xl={6} md={6} sm={4} xs={4}>
					<Nav>
						<IconButton onClick={handleClickCreateNote}>
							<FiPlus size={ICON_SIZE.MEDIUM} />
						</IconButton>
						<Tooltip
							arrow
							title="Members comming soon"
							placement="top">
							<IconButton>
								<FiUsers size={ICON_SIZE.MEDIUM} />
							</IconButton>
						</Tooltip>
						<IconButton
							onClick={openDialogDeleteAllNotes}
							disabled={countNotes === 0}>
							<FiTrash size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Nav>
				</Grid>
			</Grid>
		</>
	);
};

export default HeaderNoteView;
