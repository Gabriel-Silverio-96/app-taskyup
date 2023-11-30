import { Grid, Typography } from "@mui/material";
import {
	Card,
	CardContent,
	CardDot,
	CardHeader,
	CardNoteContainer,
} from "modules/notes/Note/components/CardNote/style";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { ICardNotes } from "modules/notes/Note/components/CardNote/types";
import CardFooter from "modules/notes/Note/components/CardNote/components/CardFooter";
import CardAction from "modules/notes/Note/components/CardNote/components/CardAction";

const CardNote: React.FC<ICardNotes> = ({ data }) => {
	const { board_id } = useParams();

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

											<CardFooter
												total={todos.total}
												total_checked={
													todos.total_checked
												}
												created_at={created_at}
											/>

											<CardAction
												{...{ note_id, board_id }}
											/>
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
