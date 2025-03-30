import { ClickAwayListener, IconButton } from "@mui/material";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "shared/components/Logo";
import { ICON_SIZE } from "shared/constants";
import Dropdown from "shared/components/Drawer/components/Header/components/Dropdown";
import { Header, Nav } from "./style";
import { IHeaderView } from "./types/Header.component";

const HeaderView: React.FC<IHeaderView> = props => {
	const {
		isOpen,
		toogleDropdown,
		toogleDropdownAway,
		handleClickOpenDialogSearchAll,
	} = props;

	return (
		<Header>
			<Link to="/dashboard">
				<Logo size={100} />
			</Link>
			<Nav>
				<IconButton onClick={handleClickOpenDialogSearchAll}>
					<BiSearch size={ICON_SIZE.MEDIUM} />
				</IconButton>
				<Dropdown open={isOpen} toogleDropdown={toogleDropdown}>
					<ClickAwayListener onClickAway={toogleDropdownAway}>
						<IconButton onClick={toogleDropdown}>
							<FiUser size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</ClickAwayListener>
				</Dropdown>
			</Nav>
		</Header>
	);
};

export default HeaderView;
