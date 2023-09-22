import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import EmptyBoard from "shared/components/EmptyBoard/EmptyBoard";
import Loading from "shared/components/Loading";
import {
	Card,
	CardAction,
	CardBar,
	CardContent,
	CardNoteContainer,
} from "./style";
import { ICardNotesView } from "./types";
import { Link } from "react-router-dom";
import { createURLQueryParams } from "shared/util/createURLQueryParams";

const CardNoteView: React.FC<ICardNotesView> = props => {
	const { board_id, palette, data, isFetching, openDialogDeleteOneNote } =
		props;

	return (
		<Grid container spacing={2}>
			<Loading isLoading={isFetching} backdrop />
			<EmptyBoard
				title="You have not created any notes"
				message="Create a note 😊"
				show={data?.count === 0}
			/>

			{data &&
				data.list_notes?.map(
					({ note_id, title_note, observation, color_note }) => {
						const redirectTo = createURLQueryParams("/note/edit", {
							note_id,
							board_id,
						});
						return (
							<Grid item xl={2} md={3} xs={12} key={note_id}>
								<CardNoteContainer>
									<Card sx={{ height: 130 }}>
										<CardContent>
											<Typography
												variant="body1"
												fontWeight={800}>
												{title_note}
											</Typography>
											<Typography
												variant="body2"
												fontSize={13}
												color="GrayText"
												sx={{ mt: 1 }}>
												{observation}
											</Typography>
											<CardAction id="card-action">
												<IconButton
													onClick={() =>
														openDialogDeleteOneNote(
															note_id
														)
													}>
													<FiTrash2
														color={
															palette.error.main
														}
														size={20}
													/>
												</IconButton>
												<Link to={redirectTo}>
													<IconButton>
														<FiEye size={20} />
													</IconButton>
												</Link>
											</CardAction>
										</CardContent>
										<CardBar color={color_note} />
									</Card>
								</CardNoteContainer>
							</Grid>
						);
					}
				)}
		</Grid>
	);
};

export default CardNoteView;
