import { Button, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import DialogNewBoard from "shared/components/Drawer/components/Aside/components/DialogNewBoard";
import { IAsideView } from "shared/components/Drawer/components/Aside/types";
import { ICON_SIZE } from "shared/constants";
import IconMenu from "./components/IconMenu";
import TreeViewBoards from "./components/TreeViewBoards";
import {
	Aside,
	AsideHeader,
	TreeViewContainer,
	TreeViewContainerItem,
} from "./style";

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

				<Divider sx={{ my: 3 }} />

				<Typography variant="button" fontWeight={700}>
					MY BOARDS
				</Typography>
				<TreeViewBoards
					expanded={treeViewExpanded}
					onNodeToggle={onNodeToggle}
					data={data}
				/>
			</TreeViewContainer>
			<DialogNewBoard
				{...{ openDialog, openDialogNewBoard, closeDialogNewBoard }}
			/>
		</Aside>
	);
};

export default AsideView;
