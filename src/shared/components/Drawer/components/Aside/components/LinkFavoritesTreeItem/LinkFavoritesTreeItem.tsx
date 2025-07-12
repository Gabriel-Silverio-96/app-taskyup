import { TreeItem } from "@mui/lab";
import { defineURLPath } from "shared/components/Drawer/components/Aside/components/LinkTreeItem/utils/define-url-path";
import { Link } from "react-router-dom";
import React from "react";
import { ILinkFavoritesTreeItem } from "shared/components/Drawer/components/Aside/components/LinkFavoritesTreeItem/types";
import { EmojiIndicator } from "../LinkTreeItem/link-tree-item.style";
import { Grid, Typography } from "@mui/material";

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
					emoji_image_url,
				}) => {
					const definedURLPath = defineURLPath(board_type_title);

					return (
						<Link
							key={favorite_id}
							to={`${definedURLPath}${related_id}&board_id=${board_id}`}
							title={title}
						>
							<TreeItem
								nodeId={favorite_id}
								label={
									<Grid
										display="flex"
										alignItems="center"
										gap={0.5}>
										<EmojiIndicator src={emoji_image_url} />
										<Typography variant="inherit">
											{title}
										</Typography>
									</Grid>
								}
							/>
						</Link>
					);
				}
			)}
		</>
	);
};



export default LinkFavoritesTreeItem;
