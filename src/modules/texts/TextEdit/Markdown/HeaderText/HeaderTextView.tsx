import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "shared/components/Logo";
import { Nav, TextTitle, TextField, Breadcrumbs } from "./style";
import { IHeaderTextView } from "./types";

const HeaderTextView: React.FC<IHeaderTextView> = props => {
	const {
		handleClickSaveText,
		titleBoard,
		titleText,
		onChangeTextTitle,
		linkPreviousPage,
		disableButtonSave,
		showMessageError,
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
						<Typography variant="caption">
							{showMessageError}
						</Typography>
					</TextTitle>
				</Breadcrumbs>
			</Grid>
			<Grid item md={3}>
				<Nav>
					<Link to={linkPreviousPage}>
						<Button variant="text">Back</Button>
					</Link>
					<Button
						variant="contained"
						onClick={handleClickSaveText}
						disabled={disableButtonSave}>
						Save
					</Button>
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderTextView;
