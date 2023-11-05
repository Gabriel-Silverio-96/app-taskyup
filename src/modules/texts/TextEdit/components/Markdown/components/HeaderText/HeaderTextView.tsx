import { Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiArrowLeft, FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "shared/components/Logo";
import { Breadcrumbs, Nav, TextField, TextTitle } from "./style";
import { IHeaderTextView } from "./types";
import { ICON_SIZE } from "shared/constants";

const HeaderTextView: React.FC<IHeaderTextView> = props => {
	const {
		handleClickOpenDialogShare,
		handleClickSaveText,
		titleBoard,
		titleText,
		onChangeTextTitle,
		linkPreviousPage,
		isError,
		message,
	} = props;

	return (
		<Grid
			container
			alignItems="center"
			justifyContent="space-between"
			sx={{ mb: 3 }}>
			<Grid item md={3}>
				<Link to="/dashboard">
					<Logo size={100} />
				</Link>
			</Grid>
			<Grid item md={3}>
				<Breadcrumbs>
					<Typography variant="caption">{titleBoard} /</Typography>
					<TextTitle>
						<TextField
							value={titleText}
							onChange={onChangeTextTitle}
						/>
						<Typography variant="caption">{message}</Typography>
					</TextTitle>
				</Breadcrumbs>
			</Grid>
			<Grid item md={3}>
				<Nav>
					<Link to={linkPreviousPage}>
						<IconButton>
							<FiArrowLeft size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Link>
					<IconButton onClick={handleClickOpenDialogShare}>
						<FiShare2 size={ICON_SIZE.MEDIUM} />
					</IconButton>
					<Button
						variant="contained"
						onClick={handleClickSaveText}
						disabled={isError}>
						Save
					</Button>
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderTextView;
