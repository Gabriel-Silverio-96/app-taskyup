import { useQuery } from "@tanstack/react-query";
import React, { memo, useState } from "react";
import useLocalStorage from "shared/common/hooks/useLocalStorage";
import AsideView from "shared/components/Drawer/components/Aside/AsideView";
import { getMenuService } from "shared/components/Drawer/components/Aside/services";
import { IOnNodeToggle } from "shared/components/Drawer/components/Aside/types";
import { MENU_QUERY_KEY } from "shared/constants";

const Aside: React.FC = () => {
	const [openAside, setOpenAside] = useLocalStorage(
		"@taskyup.aside.open",
		true
	);
	const [treeViewExpanded, setTreeViewExpanded] = useLocalStorage<string[]>(
		"@taskyup.tree_view_expanded",
		[]
	);

	const [openDialog, setOpenDialog] = useState(false);

	const toogleOpenAside = () => setOpenAside(prevState => !prevState);

	const openDialogNewBoard = () => setOpenDialog(prevState => !prevState);
	const closeDialogNewBoard = () => setOpenDialog(false);

	const onNodeToggle: IOnNodeToggle = (event, nodeIds) => {
		setTreeViewExpanded(nodeIds);
	};

	const { data } = useQuery([MENU_QUERY_KEY.FETCH_GET_MENU], getMenuService);

	return (
		<AsideView
			{...{
				data,
				openAside,
				toogleOpenAside,
				openDialog,
				openDialogNewBoard,
				closeDialogNewBoard,
				treeViewExpanded,
				onNodeToggle,
			}}
		/>
	);
};

export default memo(Aside);
