import { TreeItem } from "@mui/lab";
import { defineURLPath } from "../LinkTreeItem/utils/define-url-path";
import { Link } from "react-router-dom";
import React from "react";
import { ILinkFavoritesTreeItem } from "./types";

const LinkFavoritesTreeItem: React.FC<ILinkFavoritesTreeItem> = ({ data }) => {
	if (!data) return null;

	return (
		<>
			{data?.favorites?.map(
				({
					board_type_title,
					favorite_id,
					title,
					related_id,
					board_id,
				}) => {
					const definedURLPath = defineURLPath(board_type_title);

					return (
						<TreeItem
							key={favorite_id}
							nodeId={favorite_id}
							label={
								<Link
									to={`${definedURLPath}${related_id}&board_id=${board_id}`}>
									{title}
								</Link>
							}
						/>
					);
				}
			)}
		</>
	);
};
export default LinkFavoritesTreeItem;
