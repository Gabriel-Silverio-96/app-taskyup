import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "shared/components/Logo";
import { Nav, TextTitle, TextField, Breadcrumbs } from "./style";
import {  IHeaderTextView } from "./types/HeaderText.component";

const HeaderTextView: React.FC<IHeaderTextView> = (props) => {
	const { saveText, titleBoard, titleText, onChangeTextTitle, backPage } = props;

	const disableButtonSave = titleText.length < 3;
	const handleMessageError = titleText.length < 3 && "Minimum of 3 characters";

	return (
		<Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
			<Grid item md={3}>
				<Link to="/dashboard">
					<Logo size={100} />
				</Link>
			</Grid>
			<Grid item md={3}>
				<Breadcrumbs>
					<Typography variant="caption">{titleBoard} /</Typography>
					<TextTitle>
						<TextField value={titleText} onChange={onChangeTextTitle} />
						<Typography variant="caption">{handleMessageError}</Typography>
					</TextTitle>
				</Breadcrumbs>
			</Grid>
			<Grid item md={3}>
				<Nav>
					<Link to={backPage}>
						<Button	variant="text">
							Back
						</Button>
					</Link>
					<Button	variant="contained"	onClick={saveText} disabled={disableButtonSave}>
						Save
					</Button>
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderTextView;
