import { ClickAwayListener, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiUser } from "react-icons/fi";
import Dropdown from "./Dropdown";
import { Header, Nav } from "./style";
import { IHeaderView } from "./types/Header.component";

const HeaderView: React.FC<IHeaderView> = (props) => {
	const { isOpen, currentPageTitle, toogleDropdown, toogleDropdownAway } = props;	
	return (
		<Header>
			<Typography variant="h5" 
				fontWeight={700} 
				textTransform="capitalize"
			>
				{currentPageTitle ? currentPageTitle : "TaskYup"}
			</Typography>
			<Nav>
				<Dropdown open={isOpen}>
					<ClickAwayListener onClickAway={toogleDropdownAway}>
						<IconButton onClick={toogleDropdown}>
							<FiUser size={18}/>
						</IconButton>
					</ClickAwayListener>
				</Dropdown>
			</Nav>
		</Header>
	);
};

export default HeaderView;