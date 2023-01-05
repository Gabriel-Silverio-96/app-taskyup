import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Nav, TextTitle, TextField } from "./style";
import { IHeaderText } from "./types/HeaderText.component";

const HeaderTextView: React.FC<IHeaderText> = ({
	saveText,
	titleText,
	onChangeTextTitle,
}) => {
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
