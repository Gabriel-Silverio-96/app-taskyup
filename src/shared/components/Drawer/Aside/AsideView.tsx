import { TreeItem, TreeView } from "@mui/lab";
import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import Logo from "shared/components/Logo";
import DialogNewBoard from "../DialogNewBoard";
import { Aside, AsideHeader, TreeViewContainer } from "./style";

const AsideView: React.FC<any> = (props) => {
	const { openAside, toogleOpenAside, openDialog, openDialogNewBoard, closeDialogNewBoard } = props;

	return (
		<Aside open={openAside}>
			<AsideHeader open={openAside}>
				<Logo size={100} isoType={!openAside} />
				<IconButton
					color="primary"
					aria-label={openAside ? "close-aside" : "open-aside"}
					size="small"
					onClick={toogleOpenAside}
				>
					{openAside ? <FiChevronLeft /> : <FiChevronRight />}
				</IconButton>
			</AsideHeader>
			<Button
				variant="contained"
				fullWidth
				sx={!openAside ? { minWidth: "0", padding: "5px" } : {}}
				onClick={openDialogNewBoard}
			>
				{openAside ? "New board" : <FiPlus />}
			</Button>

			<TreeViewContainer open={openAside}>
				<Typography variant="button" fontWeight={700}>BOARDS</Typography>
				<TreeView
					aria-label="file system navigator"
					defaultCollapseIcon={<FiChevronDown />}
					defaultExpandIcon={<FiChevronRight />}
				>
					<TreeItem nodeId="1" label={<><GoNote />Notes</>}>
						<TreeItem nodeId="2" label="Title note" />
					</TreeItem>
					<TreeItem nodeId="3" label={<><MdOutlineNotes />Text</>} disabled />
					<TreeItem nodeId="4" label={<><MdOutlineSpaceDashboard />Kanban</>} disabled />
				</TreeView>
			</TreeViewContainer>
			<DialogNewBoard {...{ openDialog, openDialogNewBoard, closeDialogNewBoard }}/>
		</Aside>
	);
};

export default AsideView;