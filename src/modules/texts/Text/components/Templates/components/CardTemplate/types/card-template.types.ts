import React, { MouseEventHandler } from "react";

export interface ICardTemplate {
	onClick: MouseEventHandler;
	icon: React.ReactNode;
	title: string;
}
