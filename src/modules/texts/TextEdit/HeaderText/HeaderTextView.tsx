import { Button, Grid } from "@mui/material";
import React from "react";
import { FiTrash } from "react-icons/fi";
import { Nav, TextField } from "./style";
import { IHeaderTextView } from "./types/HeaderText.component";

const HeaderTextView: React.FC<IHeaderTextView> = (props) => {
	return (
		<Grid container alignItems="center" sx={{ mb: 3 }}>
			<Grid item xl={6} md={6} sm={8} xs={8}>
				<TextField type="text" value="Title" />
			</Grid>
			<Grid item xl={6} md={6} sm={4} xs={4}>
				<Nav>
					<Button variant="contained">Save</Button>  				
					<Button variant="contained" color="error">
						<FiTrash size={18} />	
					</Button>  				
				</Nav>
			</Grid>
		</Grid>
	);
};

export default HeaderTextView;