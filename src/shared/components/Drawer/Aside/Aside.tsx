import React, { memo, useState } from "react";
import useLocalStorage from "shared/common/hook/useLocalStorage";
import AsideView from "./AsideView";

const Aside: React.FC = () => {
	const [openAside, setOpenAside] = useLocalStorage("@taskyup.aside.open", true);
	const [openDialog, setOpenDialog] = useState(false);

	const toogleOpenAside = () => setOpenAside(prevState => !prevState);

	const openDialogNewBoard = () => setOpenDialog(prevState => !prevState);
	const closeDialogNewBoard = () => setOpenDialog(false);

	return (
		<AsideView
			{...{
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
