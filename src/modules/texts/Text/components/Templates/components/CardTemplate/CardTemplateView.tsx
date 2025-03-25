import React from "react";
import type { ICardTemplate } from "modules/texts/Text/components/Templates/components/CardTemplate/types";
import {
	CardTemplate,
	CardContent,
} from "modules/texts/Text/components/Templates/components/CardTemplate/card-template.style";
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
