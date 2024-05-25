import { Typography } from "@mui/material";
import React, { memo } from "react";
import Logo from "../Logo";
import { GreetingMessage } from "./styles";
import { IGreeting } from "./types/Greeting.component";

const Greeting: React.FC<IGreeting> = ({ title, subtitle }) => {
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

export default memo(Greeting);
