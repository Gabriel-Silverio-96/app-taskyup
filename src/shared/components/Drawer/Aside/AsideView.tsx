import { TreeItem, TreeView } from "@mui/lab";
import { Button, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineMenu, MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "shared/components/Logo";
import DialogNewBoard from "./DialogNewBoard";
import LinkTreeItem from "./components/LinkTreeItem/LinkTreeItem";
import { Aside, AsideHeader, TreeViewContainer, TreeViewContainerItem } from "./style";
import { IAsideView } from "./types/Aside.component";

const AsideView: React.FC<IAsideView> = (props) => {
	const { 
		palette,
		menu,
		openAside, 
		openDialog, 
		toogleOpenAside,
		openDialogNewBoard,
		closeDialogNewBoard 
	} = props;

	return (
		<Aside open={openAside}>
			<AsideHeader open={openAside}>
				<Link to="/dashboard">
					<Logo size={100} isoType={!openAside} />
				</Link>
				<IconButton
					color="primary"
					aria-label={openAside ? "close-aside" : "open-aside"}
					size="small"
					onClick={toogleOpenAside}
				>
					<MdOutlineMenu size={25} color={palette.common.white} />
				</IconButton>
			</AsideHeader>
			<Button
				variant="contained"
				fullWidth
				sx={!openAside ? { minWidth: "0", padding: "5px" } : {}}
				onClick={openDialogNewBoard}
			>
				New board
			</Button>

			<TreeViewContainer open={openAside}>
				<TreeViewContainerItem>
					<Typography variant="button" fontWeight={700}>DASHBOARD</Typography>
					<ul>
						<Link to="/dashboard">
							<li>
								<GrHomeRounded size={12} /> 
								<Typography variant="body2">Home</Typography>
							</li>
						</Link>
					</ul>
					<Divider sx={{ my: 3 }} />
				</TreeViewContainerItem>
				<Typography variant="button" fontWeight={700}>MY BOARDS</Typography>
				<TreeView
					aria-label="menu-navigator"
					defaultCollapseIcon={<FiChevronDown />}
					defaultExpandIcon={<FiChevronRight />}
				>
					<TreeItem nodeId="1" label={<><GoNote />Notes</>}>
						<LinkTreeItem menu={menu} slug="notes" />
					</TreeItem>
					<TreeItem nodeId="2" label={<><MdOutlineNotes />Texts</>}>
						<LinkTreeItem menu={menu} slug="texts" />
					</TreeItem>
					<Tooltip title="Comming soon" placement="right">
						<span>
							<TreeItem nodeId="4" label={<><MdOutlineSpaceDashboard />Kanban</>} disabled />
						</span>
					</Tooltip>
				</TreeView>
			</TreeViewContainer>
			<DialogNewBoard {...{ openDialog, openDialogNewBoard, closeDialogNewBoard }}/>
		</Aside>
	);
};

export default AsideView;