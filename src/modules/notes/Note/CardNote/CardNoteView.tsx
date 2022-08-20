import { CardContent, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import Loading from "shared/components/Loading";
import { CardNoteContainer, Card, CardAction, CardBar } from "./style";

const CardNoteView: React.FC<any> = (props) => {
	const { palette } = props;
	return (
		<Grid container spacing={2}>
			<Loading isLoading={false} backdrop />            
			<Grid item xl={2} md={3} xs={12}>
				<CardNoteContainer>
					<Card sx={{ height: 130 }}>
						<CardContent>
						    <Typography variant="body1" fontWeight={800}>Title note here</Typography>
						    <Typography variant="body2" fontSize={13} color="GrayText" sx={{ mt: 1 }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							</Typography>		
							<CardAction id="card-action">
								<IconButton onClick={() => console.log("Trash")}>
									<FiTrash2 color={palette.error.main} size={20} />
								</IconButton>
								<IconButton onClick={() => console.log("Eye")}>
									<FiEye size={20} />
								</IconButton>
							</CardAction>
						</CardContent>
						<CardBar color="green"/>							
					</Card>
				</CardNoteContainer>
			</Grid>
		</Grid>
	);
};

export default CardNoteView;