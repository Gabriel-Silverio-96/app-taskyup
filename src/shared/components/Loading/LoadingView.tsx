import { Backdrop, CircularProgress, Fade, Typography } from "@mui/material";
import React, { forwardRef } from "react";
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

	const LoadingComponent = forwardRef<HTMLDivElement>((_, ref) => (
		<Loading ref={ref}>
			<CircularProgress size={size} color={color} {...rest} />
			{message && (
				<Typography variant="caption">{message}</Typography>
			)}
		</Loading>
	));

	return (
		<Fade in={isLoading}>
			{backdrop ? (
				<Backdrop open sx={{ zIndex: 1 }}>
					<LoadingComponent />
				</Backdrop>
			) : (
				<div>
					<LoadingComponent />
				</div>
			)}
		</Fade>
	);
};

export default LoadingView;
