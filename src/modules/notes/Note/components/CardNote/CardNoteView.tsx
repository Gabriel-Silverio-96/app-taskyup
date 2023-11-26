import {  Grid, IconButton, Typography } from "@mui/material";
import {
	Card,
	CardHeader,
	CardAction,
	CardContent,
	CardDot,
	CardNoteContainer,
} from "modules/notes/Note/components/CardNote/style";
import { ICardNotesView } from "modules/notes/Note/components/CardNote/types";
import React from "react";
import { FiEye, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import DoodleMessage from "shared/components/DoodleMessage";
import Loading from "shared/components/Loading";
import { ICON_SIZE } from "shared/constants";
import { createURLQueryParams } from "shared/util/createURLQueryParams";

const CardNoteView: React.FC<ICardNotesView> = props => {
	const { board_id, palette, data, isFetching, openDialogDeleteOneNote } =
		props;

	return (
		<Grid container spacing={2}>
			<Loading isLoading={isFetching} backdrop />
			<DoodleMessage
				title="You have not created any notes"
				message="Create a note 😊"
				show={data?.count === 0}
			/>

			{data &&
				data.list_notes?.map(
					({ note_id, title_note, observation, color_note }) => {
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
										{/* <CardBar color={color_note} /> */}
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
