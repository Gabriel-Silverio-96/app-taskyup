import { useQuery } from "@tanstack/react-query";
import React, { memo, useState } from "react";
import useLocalStorage from "shared/common/hook/useLocalStorage";
import AsideView from "./AsideView";
import { fetchMenu } from "./service";

const Aside: React.FC = () => {
	const [openAside, setOpenAside] = useLocalStorage("@taskyup.aside.open", true);
	const [openDialog, setOpenDialog] = useState(false);

	const toogleOpenAside = () => setOpenAside(prevState => !prevState);

	const openDialogNewBoard = () => setOpenDialog(prevState => !prevState);
	const closeDialogNewBoard = () => setOpenDialog(false);

	const { data: menu } = useQuery(["menu"], fetchMenu);

	return (
		<AsideView
			{...{
				menu,
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
