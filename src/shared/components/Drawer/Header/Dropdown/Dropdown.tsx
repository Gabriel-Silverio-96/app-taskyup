import React from "react";
import DropdownView from "./DropdownView";

const Dropdown: React.FC<any> = ({ children, open }) => {
	return <DropdownView {... { children, open }} />;
};

export default Dropdown;