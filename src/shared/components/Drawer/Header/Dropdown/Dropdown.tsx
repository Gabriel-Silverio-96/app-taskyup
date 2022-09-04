import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import DropdownView from "./DropdownView";

const Dropdown: React.FC<any> = ({ children, open }) => {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem("@taskyup.token");
		localStorage.removeItem("@taskyup.user_data");
		navigate("/auth/signin");
	};

	return <DropdownView {... { children, open, logout }} />;
};

export default memo(Dropdown);