import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "shared/components/Drawer/components/Header/components/Dropdown/dropdown.style";
import type { IDropdownView } from "shared/components/Drawer/components/Header/components/Dropdown/types";

const DropdownView: React.FC<IDropdownView> = ({
	children,
	open,
	logout,
	toogleDropdown,
}) => {
	return (
		<Dropdown>
			{children}
			{open && (
				<List>
					<ListItem disablePadding onClick={toogleDropdown}>
						<Link to="/profile">
							<ListItemText primary="Profile" />
						</Link>
					</ListItem>
					<Divider sx={{ mt: 2, mb: 2 }} />
					<ListItem disablePadding onClick={logout}>
						<ListItemText primary="Log out" />
					</ListItem>
				</List>
			)}
		</Dropdown>
	);
};

export default DropdownView;
