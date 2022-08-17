import React, { memo, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderView from "./HeaderView";

const Header: React.FC = () => {
	const location = useLocation();
	const currentPageTitle = location.pathname.split("/").at(1);
	const [isOpen, setOpen] = useState(false);

	const toogleDropdown = () => setOpen(prevState => !prevState);
	const toogleDropdownAway = () => setOpen(false);

	return (
		<HeaderView
			{...{ isOpen, currentPageTitle, toogleDropdown, toogleDropdownAway }}
		/>
	);
};

export default memo(Header);
