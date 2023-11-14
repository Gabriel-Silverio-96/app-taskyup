import { TreeItem } from "@mui/lab";
import { Link } from "react-router-dom";
import { ILinkTreeItem } from "./types";
import React, { Fragment } from "react";

const LinkTreeItem: React.FC<ILinkTreeItem> = ({ menu, slug }) => {
	if (!menu) return null;

	const path =
		slug === "notes" ? "/note/edit?note_id=" : "/text/edit?text_id=";

	return (
		<>
			{menu[slug].map(({ board_id, title, items }: any) => (
				<Fragment key={board_id}>
					<TreeItem
						nodeId={board_id}
						label={
							<Link to={`/${slug}/${board_id}`}>{title}</Link>
						}>
						{items &&
							items.map(({ item_id, title }: any) => (
								<Link
									to={`${path}${item_id}&board_id=${board_id}`}
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
