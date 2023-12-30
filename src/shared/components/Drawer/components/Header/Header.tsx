import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { OPEN_DIALOG_SEARCH_ALL_TYPE } from "shared/common/store/DialogSearchAll/DialogSearchAll.reduce";
import { createAction } from "shared/common/store/store.action";
import HeaderView from "./HeaderView";

const Header: React.FC = () => {
	const dispatch = useDispatch();

	const [isOpen, setOpen] = useState(false);

	const toogleDropdown = () => setOpen(prevState => !prevState);
	const toogleDropdownAway = () => setOpen(false);

	const handleClickOpenDialogSearchAll = () =>
		dispatch(createAction(OPEN_DIALOG_SEARCH_ALL_TYPE, { open: true }));

	return (
		<HeaderView
			{...{
				isOpen,
				toogleDropdown,
				toogleDropdownAway,
				handleClickOpenDialogSearchAll,
			}}
		/>
	);
};

export default memo(Header);
