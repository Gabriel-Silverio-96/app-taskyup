import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, TextTitle, TextField } from "./style";
import {  IHeaderTextView } from "./types/HeaderText.component";

const HeaderTextView: React.FC<IHeaderTextView> = (props) => {
	const { saveText, titleText, onChangeTextTitle, backPage } = props;

	const disableButtonSave = titleText.length < 3;
	const handleMessageError = titleText.length < 3 && "Title text is required and has a minimum of 3 characters";

	return (
		<Grid container alignItems="center" sx={{ mb: 3 }}>
			<Grid item xl={6} md={6} sm={8} xs={8}>
				<TextTitle>
					<TextField					
						value={titleText}
						onChange={onChangeTextTitle}
					/>
					<Typography variant="caption">{handleMessageError}</Typography>
				</TextTitle>
			</Grid>
			<Grid item xl={6} md={6} sm={4} xs={4}>
				<Nav>
					<Link to={backPage}>
						<Button	variant="text">
							Back
						</Button>
					</Link>
					<Button
						variant="contained"
						onClick={saveText}
						disabled={disableButtonSave}>
						Save
					</Button>
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderTextView;
