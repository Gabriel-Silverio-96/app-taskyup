import CardTemplateView from "modules/texts/Text/components/Templates/components/CardTemplate/CardTemplateView";
import { ICardTemplate } from "modules/texts/Text/components/Templates/components/CardTemplate/types";
import React from "react";

const CardTemplate: React.FC<ICardTemplate> = ({ onClick, icon, title }) => (
	<CardTemplateView {...{ onClick, icon, title }} />
);

export default CardTemplate;
