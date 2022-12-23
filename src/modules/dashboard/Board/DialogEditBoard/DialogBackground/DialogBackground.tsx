import React from "react";
import DialogBackgroundView from "./DialogBackgroundView";

const DialogBackground: React.FC<any> = ({backgroundImage}) => {
	return <DialogBackgroundView  {...{backgroundImage}}/>;
};

export default DialogBackground;