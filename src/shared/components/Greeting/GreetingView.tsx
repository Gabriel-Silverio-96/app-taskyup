import { Typography } from "@mui/material";
import React from "react";
import Logo from "../Logo";
import { GreetingMessage } from "./styles";
import { IGreeting } from "./types/Greeting.component";

const GreetingView: React.FC<IGreeting> = (props) => {
	const { title, subtitle } = props;
	return (
		<div>
			<Logo size={125} />
			<GreetingMessage>
				<Typography variant="h4" fontWeight={700}>
					{title}
				</Typography>
				<Typography variant="body1" color="GrayText">
					{subtitle}
				</Typography>
			</GreetingMessage>
		</div>
	);
};

export default GreetingView;