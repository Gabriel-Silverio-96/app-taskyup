import { TreeItem, TreeView } from "@mui/lab";
import {
	Button,
	Divider,
	IconButton,
	Tooltip,
	Typography,
} from "@mui/material";
import React from "react";
import { FiChevronDown, FiChevronRight, FiHome } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import {
	MdOutlineMenu,
	MdOutlineNotes,
	MdOutlineSpaceDashboard,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { ICON_SIZE } from "shared/constants";
import DialogNewBoard from "shared/components/Drawer/components/Aside/components/DialogNewBoard";
import LinkTreeItem from "shared/components/Drawer/components/Aside/components/LinkTreeItem";
import {
	Aside,
	AsideHeader,
	TreeViewContainer,
	TreeViewContainerItem,
} from "./style";
import { IAsideView } from "shared/components/Drawer/components/Aside/types";

const AsideView: React.FC<IAsideView> = props => {
	const {
		palette,
		data,
		openAside,
		openDialog,
		toogleOpenAside,
		openDialogNewBoard,
		closeDialogNewBoard,
		treeViewExpanded,
		onNodeToggle,
	} = props;

	return (
		<Aside open={openAside}>
			<AsideHeader open={openAside}>
				<IconButton
					color="primary"
					aria-label={openAside ? "close-aside" : "open-aside"}
					size="small"
					onClick={toogleOpenAside}>
					<MdOutlineMenu size={25} color={palette.common.white} />
				</IconButton>
			</AsideHeader>
			<Button
				variant="contained"
				fullWidth
				sx={!openAside ? { minWidth: "0", padding: "5px" } : {}}
				onClick={openDialogNewBoard}>
				New board
			</Button>

			<TreeViewContainer open={openAside}>
				<TreeViewContainerItem>
					<Typography variant="button" fontWeight={700}>
						DASHBOARD
					</Typography>
					<ul>
						<Link to="/dashboard">
							<li>
								<FiHome size={ICON_SIZE.SMALL} />
								<Typography variant="body2">Home</Typography>
							</li>
						</Link>
					</ul>
					<Divider sx={{ my: 3 }} />
				</TreeViewContainerItem>
				<Typography variant="button" fontWeight={700}>
					MY BOARDS
				</Typography>
				<TreeView
					aria-label="controlled"
					expanded={treeViewExpanded}
					onNodeToggle={onNodeToggle}
					defaultCollapseIcon={
						<FiChevronDown size={ICON_SIZE.SMALL} />
					}
					defaultExpandIcon={
						<FiChevronRight size={ICON_SIZE.SMALL} />
					}>
					<TreeItem
						nodeId="1"
						label={
							<>
								<GoNote size={ICON_SIZE.SMALL} />
								Notes
							</>
						}>
						<LinkTreeItem data={data} slug="notes" />
					</TreeItem>
					<TreeItem
						nodeId="2"
						label={
							<>
								<MdOutlineNotes size={ICON_SIZE.SMALL} />
								Texts
							</>
						}>
						<LinkTreeItem data={data} slug="texts" />
					</TreeItem>
					<Tooltip title="Comming soon" placement="right">
						<span>
							<TreeItem
								nodeId="4"
								label={
									<>
										<MdOutlineSpaceDashboard
											size={ICON_SIZE.SMALL}
										/>
										Kanban
									</>
								}
								disabled
							/>
						</span>
					</Tooltip>
				</TreeView>
			</TreeViewContainer>
			<DialogNewBoard
				{...{ openDialog, openDialogNewBoard, closeDialogNewBoard }}
			/>
		</Aside>
	);
};

export default AsideView;
