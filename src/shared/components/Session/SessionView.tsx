import React from "react";
import { ISessionView } from "./types/Session.component";

const SessionView: React.FC<ISessionView> = ({ children }) => {
	return <>{children}</>;
};

export default SessionView;
