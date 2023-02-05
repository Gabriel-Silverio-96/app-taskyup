import { Typography } from "@mui/material";
import React from "react";
import { Templates, CardTemplate, CardContent } from "./style";

const TemplatesView: React.FC<any> = (props) => {
	
	return (
		<Templates>
			<CardTemplate>
				<CardContent>
					
				</CardContent>
				<Typography variant="caption">Table</Typography>
			</CardTemplate>
		</Templates>
	);
};

export default TemplatesView;