import { Backdrop, CircularProgress, Fade, Typography } from "@mui/material";
import React from "react";
import { Loading } from "./style";
import { ILoading } from "./types/Loading.component";

const LoadingView: React.FC<ILoading> = props => {
	const {
		isLoading,
		message,
		size = 15,
		color = "primary",
		backdrop = false,
		...rest
	} = props;
	return (
		<Fade in={isLoading}>
			{backdrop ? (
				<Backdrop open>
					<Loading>
						<CircularProgress size={size} color={color} {...rest} />
						{message && (
							<Typography variant="caption">{message}</Typography>
						)}
					</Loading>
				</Backdrop>
			) : (
				<Loading>
					<CircularProgress size={size} color={color} {...rest} />
					{message && (
						<Typography variant="caption">{message}</Typography>
					)}
				</Loading>
			)}
		</Fade>
	);
};

export default LoadingView;
