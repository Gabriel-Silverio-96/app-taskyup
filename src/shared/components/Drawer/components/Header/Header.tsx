import React, { memo, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderView from "./HeaderView";
import { useDispatch } from "react-redux";
import { createAction } from "shared/common/store/store.action";
import { OPEN_DIALOG_SEARCH_ALL_TYPE } from "shared/common/store/DialogSearchAll/DialogSearchAll.reduce";

const Header: React.FC = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const [isOpen, setOpen] = useState(false);

	const currentPageTitle = location.pathname.split("/").at(1);

	const toogleDropdown = () => setOpen(prevState => !prevState);
	const toogleDropdownAway = () => setOpen(false);

	const handleClickOpenDialogSearchAll = () => dispatch(createAction(OPEN_DIALOG_SEARCH_ALL_TYPE, { open: true }));

	return (
		<HeaderView
			{...{ isOpen, currentPageTitle, toogleDropdown, toogleDropdownAway, handleClickOpenDialogSearchAll }}
		/>
	);
};

export default memo(Header);
