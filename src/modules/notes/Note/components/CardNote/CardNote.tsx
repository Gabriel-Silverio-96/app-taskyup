import { Grid, Typography } from "@mui/material";
import {
	Card,
	CardContent,
	CardDot,
	CardEmoji,
	CardHeader,
	CardNoteContainer,
} from "modules/notes/Note/components/CardNote/card-note.style";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import type { ICardNotes } from "modules/notes/Note/components/CardNote/types";
import CardFooter from "modules/notes/Note/components/CardNote/components/CardFooter";
import CardAction from "modules/notes/Note/components/CardNote/components/CardAction";
import { useNoteContext } from "modules/notes/Note/Context";
import { defineGridSize } from "modules/notes/Note/components/CardNote/utils";
import { VIEW_MODE } from "shared/constants";

const CardNote: React.FC<ICardNotes> = ({ data }) => {
	const { board_id } = useParams();
	const { viewMode } = useNoteContext();

	const defineViewModeClassName =
		viewMode === VIEW_MODE.LIST ? "view-mode-list" : "";

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
						favorite,
						favorite_id,
						emoji_image_url,
					}) => {
						const isHiddenCardDot = Boolean(emoji_image_url);
						return (
							<Grid
								item
								key={note_id}
								{...defineGridSize(viewMode)}>
								<CardNoteContainer viewmode={viewMode}>
									<Card className={defineViewModeClassName}>
										<CardContent>
											<CardHeader>
												<CardEmoji
													src={emoji_image_url}
												/>
												<CardDot
													color={color_note}
													hidden={isHiddenCardDot}
													aria-hidden={
														isHiddenCardDot
													}
												/>
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
												{...{
													note_id,
													board_id,
													favorite_id,
													favorite,
												}}
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
