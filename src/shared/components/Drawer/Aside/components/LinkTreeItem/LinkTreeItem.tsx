import { TreeItem } from "@mui/lab";
import { Link } from "react-router-dom";
import { ILinkTreeItem } from "./types";

const LinkTreeItem: React.FC<ILinkTreeItem> = ({ menu, slug }) => {
	if (!menu) return null;

	return (
		<>
			{menu[slug].map(({ board_id, title }) => (
				<Link to={`/${slug}/${board_id}`} key={board_id}>
					<TreeItem nodeId={board_id} label={title} />
				</Link>
			))}
		</>
	);
};

export default LinkTreeItem;
