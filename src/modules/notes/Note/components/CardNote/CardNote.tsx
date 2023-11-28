import { Grid, IconButton, Typography, useTheme } from "@mui/material";
import {
	Card,
	CardAction,
	CardContent,
	CardDot,
	CardHeader,
	CardNoteContainer,
} from "modules/notes/Note/components/CardNote/style";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import React, { memo } from "react";
import { FiEye, FiTrash } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import TodoCount from "shared/components/TodoCount";
import { ICON_SIZE } from "shared/constants";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import dateFormat from "shared/util/dateFormat";
import { ICardNotes } from "./types";

const CardNote: React.FC<ICardNotes> = ({ data }) => {
	const { board_id } = useParams();
	const { palette } = useTheme();

	const { openDialogDeleteOneNote } = useDialogNote();

	return (
		<Grid container spacing={2}>
			{data &&
				data.list_notes?.map(
					({
						note_id,
						title_note,
						observation,
						color_note,
						created_at,
						todos,
					}) => {
						const createdAt = dateFormat(created_at);
						const linkToNoteEdit = createURLQueryParams(
							"/note/edit",
							{
								note_id,
								board_id,
							}
						);
						return (
							<Grid item xl={2} md={3} xs={12} key={note_id}>
								<CardNoteContainer>
									<Card sx={{ height: 130 }}>
										<CardContent>
											<CardHeader>
												<CardDot color={color_note} />
												<Typography
													variant="body1"
													fontWeight={800}>
													{title_note}
												</Typography>
											</CardHeader>

											<Typography
												variant="body2"
												fontSize={13}
												color="GrayText"
												sx={{ mt: 1 }}>
												{observation}
											</Typography>

											<Grid
												container
												justifyContent="space-between"
												sx={{ mt: 2 }}>
												<TodoCount
													total={todos.total}
													totalChecked={
														todos.total_checked
													}
												/>

												<Typography
													variant="caption"
													color="GrayText">
													{createdAt}
												</Typography>
											</Grid>

											<CardAction id="card-action">
												<IconButton
													onClick={() =>
														openDialogDeleteOneNote(
															note_id
														)
													}>
													<FiTrash
														color={
															palette.error.main
														}
														size={ICON_SIZE.MEDIUM}
													/>
												</IconButton>
												<Link to={linkToNoteEdit}>
													<IconButton>
														<FiEye
															size={
																ICON_SIZE.MEDIUM
															}
														/>
													</IconButton>
												</Link>
											</CardAction>
										</CardContent>
									</Card>
								</CardNoteContainer>
							</Grid>
						);
					}
				)}
		</Grid>
	);
};

export default memo(CardNote);
