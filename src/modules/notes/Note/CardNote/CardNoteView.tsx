import { CardContent, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import Loading from "shared/components/Loading";
import NoteNotCreatedMessage from "./NoteNotCreatedMessage";
import { Card, CardAction, CardBar, CardNoteContainer } from "./style";
import { ICardNotesView } from "./types/CardNote.component";

const CardNoteView: React.FC<ICardNotesView> = props => {
	const { palette, data, isFetching, openDialogEditNote, openDialogDeleteSingleNote } = props;
	return (
		<Grid container spacing={2}>
			<Loading isLoading={isFetching} backdrop />
			<NoteNotCreatedMessage notes={data}/>
			{data &&
				data.list_notes?.map(({ note_id, title_note, observation, color_note }) => {
					const title = title_note.length > 30 
						? `${title_note.substring(0, 30).trim()}...`
						: title_note;

					const observationNote = observation.length > 50 
						? `${observation.substring(0, 50).trim()}...`
						: observation;

					return (
						<Grid item xl={2} md={3} xs={12} key={note_id}>
							<CardNoteContainer>
								<Card sx={{ height: 130 }}>
									<CardContent>
										<Typography variant="body1" fontWeight={800}>
											{title}
										</Typography>
										<Typography
											variant="body2"
											fontSize={13}
											color="GrayText"
											sx={{ mt: 1 }}>
											{observationNote}
										</Typography>
										<CardAction id="card-action">
											<IconButton
												onClick={() => openDialogDeleteSingleNote(note_id)}>
												<FiTrash2
													color={palette.error.main}
													size={20}
												/>
											</IconButton>
											<IconButton
												onClick={() => openDialogEditNote(note_id)}>
												<FiEye size={20} />
											</IconButton>
										</CardAction>
									</CardContent>
									<CardBar color={color_note} />
								</Card>
							</CardNoteContainer>
						</Grid>
					);
				})}
		</Grid>
	);
};

export default CardNoteView;
