import { Button, Grid } from "@mui/material";
import React from "react";
import { Nav, TextField } from "./style";
import { IHeaderText } from "./types/HeaderText.component";

const HeaderTextView: React.FC<IHeaderText> = ({ saveText, titleText, onChangeTextTitle }) => {
	return (
		<Grid container alignItems="center" sx={{ mb: 3 }}>
			<Grid item xl={6} md={6} sm={8} xs={8}>
				<TextField type="text" value={titleText} onChange={onChangeTextTitle} />
			</Grid>
			<Grid item xl={6} md={6} sm={4} xs={4}>
				<Nav>
					<Button variant="contained" onClick={saveText}>Save</Button>  				
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderTextView;