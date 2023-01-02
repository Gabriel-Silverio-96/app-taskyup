import { IconButton, Typography } from "@mui/material";
import React from "react";
import { FiEye, FiPlus, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import dateFormat from "shared/util/dateFormat";
import { CardContainer, CardContent, CardCreateText, CardHeader, CardText } from "./style";

const CardTextView: React.FC<any> = props => {
	const { palette, data } = props;
	return (
		<CardContainer>
			<div>
				<CardCreateText>
					<FiPlus size={40} />
					<Typography variant="caption">Create</Typography>
				</CardCreateText>
			</div>
			{data && data.texts.map((text: any) => {
				const createdAt = dateFormat(text.created_at);
				const linkTo = `/text/edit/${text.text_id}`;

				return (
					<div key={text.text_id}>
						<CardText>
							<CardHeader>
								<IconButton>
									<FiTrash color={palette.error.main} size={20} />
								</IconButton>
								<Link to={linkTo}>
									<IconButton>
										<FiEye size={20} />
									</IconButton>
								</Link>
							</CardHeader>
							<CardContent>
								<Typography variant="body1" fontWeight={800}>
									{text.title_text}
								</Typography>
								<Typography variant="caption" color="GrayText">
                            		Created at {createdAt}
								</Typography>
							</CardContent>
						</CardText>
					</div>
				);
			})}			
		</CardContainer>
	);
};

export default CardTextView;
