import { Button } from "@mui/material";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { DialogBackground } from "./style";

const DialogBackgroundView: React.FC<any> = ({ backgroundImage }) => {
	const thereBackgroundImage = Boolean(backgroundImage);

	return (
		<DialogBackground backgroundImage={backgroundImage}>
			<Button variant="contained" size="small">
				<FiEdit size={15} />
			</Button>
			<Button variant="contained" color="error" size="small" disabled={!thereBackgroundImage}>
				<AiOutlineDelete size={15} />
			</Button>
		</DialogBackground>
	);
};

export default DialogBackgroundView;
