import { FiChevronDown, FiChevronRight, FiStar } from "react-icons/fi";
import { TreeView, TreeItem } from "@mui/lab";
import { ICON_SIZE } from "shared/constants";
import LinkFavoritesTreeItem from "shared/components/Drawer/components/Aside/components/LinkFavoritesTreeItem";
import type { ITreeViewDashboard } from "shared/components/Drawer/components/Aside/components/TreeViewDashboard/types";

const TreeViewDashboard: React.FC<ITreeViewDashboard> = ({
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
			nodeId="favorites"
			label={
				<>
					<FiStar size={ICON_SIZE.SMALL} />
					Favorites
				</>
			}>
			<LinkFavoritesTreeItem data={data} />
		</TreeItem>
	</TreeView>
);

export default TreeViewDashboard;
