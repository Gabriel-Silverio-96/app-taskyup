import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./style";

const DropdownView: React.FC<any> = ({ children, open }) => {
	return (
		<Dropdown>
			{children}
			{ open && (
				<List>
					<ListItem disablePadding>
						<Link to="/profile">
							<ListItemText primary="Profile" />
						</Link>
					</ListItem>
					<ListItem disablePadding>
						<Link to="/setting">
						    <ListItemText primary="Setting" />
						</Link>
					</ListItem>
					<Divider sx={{mt: 2, mb: 2}}/>
					<ListItem disablePadding>
						<ListItemText primary="Exit" />
					</ListItem>
				</List>
			)}
		</Dropdown>
	);
};

export default DropdownView;