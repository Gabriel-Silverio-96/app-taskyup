import { TreeItem } from "@mui/lab";
import { Link } from "react-router-dom";
import { ILinkTreeItem } from "shared/components/Drawer/components/Aside/components/LinkTreeItem/types";
import { Fragment } from "react";
import { defineURLPath } from "shared/components/Drawer/components/Aside/components/LinkTreeItem/utils/define-url-path";

const LinkTreeItem: React.FC<ILinkTreeItem> = ({ data, slug }) => {
	if (!data) return null;

	const definedURLPath = defineURLPath(slug);

	return (
		<>
			{data[slug].map(({ board_id, title, items }: any) => (
				<Fragment key={board_id}>
					<TreeItem
						nodeId={board_id}
						label={
							<Link to={`/${slug}/${board_id}`}>{title}</Link>
						}>
						{items &&
							items.map(({ item_id, title }: any) => (
								<Link
									to={`${definedURLPath}${item_id}&board_id=${board_id}`}
									key={item_id}>
									<TreeItem nodeId={item_id} label={title} />
								</Link>
							))}
					</TreeItem>
				</Fragment>
			))}
		</>
	);
};

export default LinkTreeItem;
