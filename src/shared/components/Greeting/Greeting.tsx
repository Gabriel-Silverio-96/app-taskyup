import React, { memo } from "react";
import GreetingView from "./GreetingView";
import { IGreeting } from "./types/Greeting.component";

const Greeting: React.FC<IGreeting> = ({ title, subtitle }) => {
	return <GreetingView {...{ title, subtitle }} />;
};

export default memo(Greeting);
