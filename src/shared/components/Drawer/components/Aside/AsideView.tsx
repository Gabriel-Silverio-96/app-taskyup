import { TreeItem, TreeView } from "@mui/lab";
import {
	Button,
	Divider,
	IconButton,
	Tooltip,
	Typography,
} from "@mui/material";
import React from "react";
import { FiChevronDown, FiChevronRight, FiHome, FiStar } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import DialogNewBoard from "shared/components/Drawer/components/Aside/components/DialogNewBoard";
import LinkTreeItem from "shared/components/Drawer/components/Aside/components/LinkTreeItem";
import { IAsideView } from "shared/components/Drawer/components/Aside/types";
import { ICON_SIZE } from "shared/constants";
import IconMenu from "./components/IconMenu";
import {
	Aside,
	AsideHeader,
	TreeViewContainer,
	TreeViewContainerItem,
} from "./style";
import LinkFavoritesTreeItem from "./components/LinkFavoritesTreeItem";

const AsideView: React.FC<IAsideView> = props => {
	const {
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
				<Button
					variant="contained"
					fullWidth
					sx={!openAside ? { minWidth: "0", padding: "5px" } : {}}
					onClick={openDialogNewBoard}>
					New board
				</Button>

				<IconButton
					aria-label={openAside ? "close-aside" : "open-aside"}
					size="small"
					onClick={toogleOpenAside}>
					<IconMenu openAside={openAside} />
				</IconButton>
			</AsideHeader>

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
				</TreeViewContainerItem>
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
								<FiStar size={ICON_SIZE.SMALL} />
								Favorites
							</>
						}>
						<LinkFavoritesTreeItem data={data} />
					</TreeItem>
				</TreeView>

				<Divider sx={{ my: 3 }} />

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
						nodeId="2"
						label={
							<>
								<GoNote size={ICON_SIZE.SMALL} />
								Notes
							</>
						}>
						<LinkTreeItem data={data} propertyName="notes" />
					</TreeItem>
					<TreeItem
						nodeId="3"
						label={
							<>
								<MdOutlineNotes size={ICON_SIZE.SMALL} />
								Texts
							</>
						}>
						<LinkTreeItem data={data} propertyName="texts" />
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
