import React from "react";
import CardTemplateView from "./CardTemplateView";
import { ICardTemplate } from "./types";

const CardTemplate: React.FC<ICardTemplate> = ({ onClick, icon, title }) => (
	<CardTemplateView {...{ onClick, icon, title }} />
);

export default CardTemplate;
