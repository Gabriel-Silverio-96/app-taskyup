import React, { memo, useState } from "react";
import HeaderView from "./HeaderView";

const Header: React.FC = () => {
	const [isOpen, setOpen] = useState(false);
	
	const toogleDropdown = () => setOpen(prevState => !prevState);
	const toogleDropdownAway = () => setOpen(false);
	
	return <HeaderView {...{ isOpen, toogleDropdown, toogleDropdownAway }} />;
};

export default memo(Header);