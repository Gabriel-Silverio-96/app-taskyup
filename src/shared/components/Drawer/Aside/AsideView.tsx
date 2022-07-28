import { TreeItem, TreeView } from "@mui/lab";
import { Button, Typography } from "@mui/material";
import React from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import Logo from "shared/components/Logo";
import { Aside, AsideHeader, TreeViewContainer } from "./style";

const AsideView: React.FC<any> = () => {
	return (
		<Aside>
			<AsideHeader>
				<Logo size={100} />
			</AsideHeader>
			<Button variant="contained" fullWidth>New board</Button>  

			<TreeViewContainer>
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
		</Aside>
	);
};

export default AsideView;