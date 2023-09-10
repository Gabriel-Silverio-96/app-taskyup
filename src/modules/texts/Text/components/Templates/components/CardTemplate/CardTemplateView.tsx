import React from "react";
import { ICardTemplate } from "./types";
import { CardTemplate, CardContent } from "./style";
import { Typography } from "@mui/material";

const CardTemplateView: React.FC<ICardTemplate> = ({
	onClick,
	icon,
	title,
}) => {
	return (
		<CardTemplate onClick={onClick}>
			<CardContent>{icon}</CardContent>
			<Typography variant="caption">{title}</Typography>
		</CardTemplate>
	);
};

export default CardTemplateView;
