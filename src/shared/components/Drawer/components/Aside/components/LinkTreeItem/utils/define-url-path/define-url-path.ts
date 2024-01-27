import { TypeBoard } from "shared/common/types";
import { IPathMapping } from "shared/components/Drawer/components/Aside/components/LinkTreeItem/utils/define-url-path/types";

export const pathMapping: IPathMapping = {
	notes: "/note/edit?note_id=",
	texts: "/text/edit?text_id=",
};

export const defineURLPath = (slug: TypeBoard) => {
	return pathMapping[slug];
};
