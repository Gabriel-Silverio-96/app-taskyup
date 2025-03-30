import { useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import DropdownView from "shared/components/Drawer/components/Header/components/Dropdown/DropdownView";
import type { IDropdown } from "shared/components/Drawer/components/Header/components/Dropdown/types";

const Dropdown: React.FC<IDropdown> = ({ children, open, toogleDropdown }) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const logout = () => {
		toogleDropdown();
		localStorage.removeItem("@taskyup.token");
		localStorage.removeItem("@taskyup.user_data");

		queryClient.clear();
		navigate("/auth/signin");
	};

	return <DropdownView {...{ children, open, logout, toogleDropdown }} />;
};

export default memo(Dropdown);
