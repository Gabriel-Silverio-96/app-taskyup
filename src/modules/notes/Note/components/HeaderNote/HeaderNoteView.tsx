import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { Nav } from "modules/notes/Note/components/HeaderNote/style";
import { IHeaderNoteView } from "modules/notes/Note/components/HeaderNote/types";
import React from "react";
import { FiColumns, FiPlus, FiTrash, FiUsers } from "react-icons/fi";
import Loading from "shared/components/Loading/Loading";
import { ICON_SIZE } from "shared/constants";

const HeaderNoteView: React.FC<IHeaderNoteView> = props => {
	const {
		title,
		handleClickViewMode,
		openDialogDeleteAllNotes,
		isDisabledDeleteAllNotes,
		mutate,
		isLoading,
	} = props;

	return (
		<>
			<Loading
				isLoading={isLoading}
				backdrop
				message={isLoading ? "Creating note" : ""}
			/>
			<Grid container alignItems="center" sx={{ mb: 3 }}>
				<Grid item xl={6} md={6} sm={8} xs={8}>
					<Typography variant="h6" fontWeight={800}>
						{title}
					</Typography>
				</Grid>
				<Grid item xl={6} md={6} sm={4} xs={4}>
					<Nav>
						<IconButton onClick={() => mutate()}>
							<FiPlus size={ICON_SIZE.MEDIUM} />
						</IconButton>
						<IconButton onClick={handleClickViewMode}>
							<FiColumns size={ICON_SIZE.MEDIUM} />
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
							disabled={isDisabledDeleteAllNotes}>
							<FiTrash size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Nav>
				</Grid>
			</Grid>
		</>
	);
};

export default HeaderNoteView;
