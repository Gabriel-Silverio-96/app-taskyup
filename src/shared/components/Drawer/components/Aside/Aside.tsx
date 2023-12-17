import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo, useState } from "react";
import useLocalStorage from "shared/common/hook/useLocalStorage";
import AsideView from "./AsideView";
import { fetchGetMenuService } from "shared/components/Drawer/components/Aside/services";
import { MENU_QUERY_KEY } from "shared/constants";

const Aside: React.FC = () => {
	const { palette } = useTheme();

	const [openAside, setOpenAside] = useLocalStorage(
		"@taskyup.aside.open",
		true
	);
	const [openDialog, setOpenDialog] = useState(false);

	const toogleOpenAside = () => setOpenAside(prevState => !prevState);

	const openDialogNewBoard = () => setOpenDialog(prevState => !prevState);
	const closeDialogNewBoard = () => setOpenDialog(false);

	const { data } = useQuery(
		[MENU_QUERY_KEY.FETCH_GET_MENU],
		fetchGetMenuService
	);

	return (
		<AsideView
			{...{
				palette,
				data,
				openAside,
				toogleOpenAside,
				openDialog,
				openDialogNewBoard,
				closeDialogNewBoard,
			}}
		/>
	);
};

export default memo(Aside);
