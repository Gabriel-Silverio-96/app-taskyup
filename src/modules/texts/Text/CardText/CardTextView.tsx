import { IconButton, Typography } from "@mui/material";
import React from "react";
import { FiEye, FiPlus, FiTrash } from "react-icons/fi";
import { CardContainer, CardContent, CardCreateText, CardHeader, CardText } from "./style";

const CardTextView: React.FC<any> = props => {
	const { palette } = props;
	return (
		<CardContainer>
			<div>
				<CardCreateText>
					<FiPlus size={40} />
					<Typography variant="caption">Create</Typography>
				</CardCreateText>
			</div>
			<div>
				<CardText>
					<CardHeader>
						<IconButton>
							<FiTrash 
								color={palette.error.main}
								size={20}
							/>
						</IconButton>
						<IconButton>
							<FiEye size={20} />
						</IconButton>
					</CardHeader>
					<CardContent>
						<Typography variant="body1" fontWeight={800}>
                            Lorem Ipsum is simply dummy text of ...
						</Typography>
						<Typography variant="caption" color="GrayText">
                            Created at 10/30/2022
						</Typography>
					</CardContent>
				</CardText>
			</div>
		</CardContainer>
	);
};

export default CardTextView;
