import { ClickAwayListener, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiUser } from "react-icons/fi";
import Dropdown from "./Dropdown";
import { Header } from "./style";

const HeaderView: React.FC<any> = ({ isOpen, toogleDropdown, toogleDropdownAway }) => {
	return (
		<Header>
			<Typography variant="h5" fontWeight={700}>Dashboard</Typography>
			<nav>
				<Dropdown open={isOpen}>
					<ClickAwayListener onClickAway={toogleDropdownAway}>
						<IconButton onClick={toogleDropdown}>
							<FiUser size={18}/>
						</IconButton>
					</ClickAwayListener>
				</Dropdown>
			</nav>
		</Header>
	);
};

export default HeaderView;