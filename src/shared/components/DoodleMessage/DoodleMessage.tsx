import { Grid, Typography } from "@mui/material";
import React, { memo } from "react";
import type { IDoodleMessage } from "shared/components/DoodleMessage/types";

const DoodleMessage: React.FC<IDoodleMessage> = ({
	show,
	title,
	message,
	image,
	textAlign,
}) => {
	return (
		<>
			{show && (
				<Grid item md={12} sx={{ mt: 1 }} textAlign={textAlign}>
					{image}
					<Typography variant="body2" fontWeight={800}>
						{title}
					</Typography>
					<Typography variant="caption" color="GrayText">
						{message}
					</Typography>
				</Grid>
			)}
		</>
	);
};

export default memo(DoodleMessage);
