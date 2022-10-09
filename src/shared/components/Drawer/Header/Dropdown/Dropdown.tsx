import { useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import DropdownView from "./DropdownView";
import { IDropdown } from "./types/Dropdown.component";

const Dropdown: React.FC<IDropdown> = ({ children, open }) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	
	const logout = () => {
		localStorage.removeItem("@taskyup.token");
		localStorage.removeItem("@taskyup.user_data");
		localStorage.removeItem("@taskyup.access_last_page");

		queryClient.clear();		
		navigate("/auth/signin");
	};

	return <DropdownView {... { children, open, logout }} />;
};

export default memo(Dropdown);