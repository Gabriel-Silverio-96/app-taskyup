import { TreeItem, TreeView } from "@mui/lab";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import { ICON_SIZE } from "shared/constants";
import LinkTreeItem from "../LinkTreeItem";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import { Tooltip } from "@mui/material";
import type { ITreeViewBoards } from "shared/components/Drawer/components/Aside/components/TreeViewBoards/types";

const TreeViewBoards: React.FC<ITreeViewBoards> = ({
	expanded,
	onNodeToggle,
	data,
}) => (
	<TreeView
		aria-label="controlled"
		expanded={expanded}
		onNodeToggle={onNodeToggle}
		defaultCollapseIcon={<FiChevronDown size={ICON_SIZE.SMALL} />}
		defaultExpandIcon={<FiChevronRight size={ICON_SIZE.SMALL} />}>
		<TreeItem
			nodeId="notes"
			label={
				<>
					<GoNote size={ICON_SIZE.SMALL} />
					Notes
				</>
			}>
			<LinkTreeItem data={data} propertyName="notes" />
		</TreeItem>
		<TreeItem
			nodeId="texts"
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
					nodeId="kanban"
					label={
						<>
							<MdOutlineSpaceDashboard size={ICON_SIZE.SMALL} />
							Kanban
						</>
					}
					disabled
				/>
			</span>
		</Tooltip>
	</TreeView>
);

export default TreeViewBoards;
