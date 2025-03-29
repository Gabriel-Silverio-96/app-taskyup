import { TreeItem } from "@mui/lab";
import { Link } from "react-router-dom";
import { ILinkTreeItem } from "shared/components/Drawer/components/Aside/components/LinkTreeItem/types";
import { Fragment } from "react";
import { defineURLPath } from "shared/components/Drawer/components/Aside/components/LinkTreeItem/utils/define-url-path";
import { FiLink } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";
import {
	TreeItemContainer,
	LinkIcon,
	TreeItemLabel,
} from "shared/components/Drawer/components/Aside/components/LinkTreeItem/link-tree-item.style";

const LinkTreeItem: React.FC<ILinkTreeItem> = ({ data, propertyName }) => {
	if (!data) return null;

	return (
		<>
			{data[propertyName].map(
				({ board_id, title, board_type_title, items }) => (
					<Fragment key={board_id}>
						<TreeItemContainer>
							<TreeItem
								nodeId={board_id}
								label={<TreeItemLabel>{title}</TreeItemLabel>}>
								{items &&
									items.map(({ item_id, title }) => {
										const definedURLPath =
											defineURLPath(board_type_title);

										return (
											<Link
												to={`${definedURLPath}${item_id}&board_id=${board_id}`}
												key={item_id}>
												<TreeItem
													nodeId={item_id}
													label={title}
												/>
											</Link>
										);
									})}
							</TreeItem>
							<LinkIcon
								to={`/${board_type_title}/${board_id}`}
								data-testid="link-icon">
								<FiLink size={ICON_SIZE.EXTRA_SMALL} />
							</LinkIcon>
						</TreeItemContainer>
					</Fragment>
				)
			)}
		</>
	);
};

export default LinkTreeItem;
