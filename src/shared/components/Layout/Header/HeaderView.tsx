import { ClickAwayListener, IconButton } from "@mui/material";
import React from "react";
import { FiUser } from "react-icons/fi";
import Dropdown from "./Dropdown";
import { Header } from "./style";

const HeaderView: React.FC<any> = ({ isOpen, toogleDropdown, toogleDropdownAway }) => {
	return (
		<Header>
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