import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./style";
import { IDropdownView } from "./types/Dropdown.component";

const DropdownView: React.FC<IDropdownView> = ({ children, open, logout, toogleDropdown }) => {
	return (
		<Dropdown>
			{children}
			{ open && (
				<List>
					<ListItem disablePadding onClick={toogleDropdown}>
						<Link to="/profile">
							<ListItemText primary="Profile" />
						</Link>
					</ListItem>
					<Divider sx={{mt: 2, mb: 2}}/>
					<ListItem disablePadding onClick={logout}>
						<ListItemText primary="Log out" />
					</ListItem>
				</List>
			)}
		</Dropdown>
	);
};

export default DropdownView;