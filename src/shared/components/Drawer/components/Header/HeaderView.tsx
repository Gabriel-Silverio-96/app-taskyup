import { ClickAwayListener, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiUser } from "react-icons/fi";
import Dropdown from "./Dropdown";
import { Header, Nav } from "./style";
import { IHeaderView } from "./types/Header.component";
import { BiSearch } from "react-icons/bi";
import { ICON_SIZE } from "shared/constants";

const HeaderView: React.FC<IHeaderView> = props => {
	const {
		isOpen,
		currentPageTitle,
		toogleDropdown,
		toogleDropdownAway,
		handleClickOpenDialogSearchAll,
	} = props;

	return (
		<Header>
			<Typography
				variant="h5"
				fontWeight={700}
				textTransform="capitalize">
				{currentPageTitle ? currentPageTitle : "TaskYup"}
			</Typography>
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
