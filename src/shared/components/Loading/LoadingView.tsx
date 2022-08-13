import { CircularProgress, Fade, Typography } from "@mui/material";
import React from "react";
import { Loading } from "./style";
import { ILoading } from "./types/Loading.component";

const LoadingView: React.FC<ILoading> = (props) => {
	const { isLoading, message, size = 15, color = "primary"} = props;
	return (
		<Fade in={isLoading}>
			<Loading>
				<CircularProgress size={size} color={color} {...props} />
				{message && <Typography variant="caption">{message}</Typography>}
			</Loading>
		</Fade>
	);
};

export default LoadingView;
