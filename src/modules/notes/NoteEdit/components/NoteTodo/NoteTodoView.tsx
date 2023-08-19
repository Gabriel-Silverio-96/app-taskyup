import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";

const NoteTodoView: React.FC<any> = () => {
	return (
		<div>
			<Grid container>
				<Grid item md={6}>
					<Typography variant="h6" fontWeight={800}>
						Todo
					</Typography>
				</Grid>
				<Grid item md={6} textAlign="right">
					<Button startIcon={<FiPlus />}>New task</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default NoteTodoView;
