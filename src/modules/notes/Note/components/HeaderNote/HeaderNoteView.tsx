import { Grid, IconButton, Tooltip } from "@mui/material";
import { Nav, TypographyTitle } from "modules/notes/Note/components/HeaderNote/header-note.style";
import type { IHeaderNoteView } from "modules/notes/Note/components/HeaderNote/types";
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
				<Grid item xl={6} md={6} sm={8} xs={12}>
					<Tooltip arrow title={title || ""} placement="top">
						<TypographyTitle variant="h6" fontWeight={800}>
							{title}
						</TypographyTitle>
					</Tooltip>
				</Grid>
				<Grid item xl={6} md={6} sm={4} xs={12}>
					<Nav>
						<Tooltip arrow title="Create note" placement="top">
							<IconButton onClick={() => mutate()}>
								<FiPlus size={ICON_SIZE.MEDIUM} />
							</IconButton>
						</Tooltip>

						<Tooltip arrow title="View mode" placement="top">
							<IconButton onClick={handleClickViewMode}>
								<FiColumns size={ICON_SIZE.MEDIUM} />
							</IconButton>
						</Tooltip>

						<Tooltip
							arrow
							title="Members comming soon"
							placement="top">
							<IconButton>
								<FiUsers size={ICON_SIZE.MEDIUM} />
							</IconButton>
						</Tooltip>

						<Tooltip arrow title="Delete notes" placement="top">
							<IconButton
								onClick={openDialogDeleteAllNotes}
								disabled={isDisabledDeleteAllNotes}>
								<FiTrash size={ICON_SIZE.MEDIUM} />
							</IconButton>
						</Tooltip>
					</Nav>
				</Grid>
			</Grid>
		</>
	);
};

export default HeaderNoteView;
