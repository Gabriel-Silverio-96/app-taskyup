import { IFetchGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";

type TypeSlug = "notes" | "texts";

export interface ILinkTreeItem {
	data: IFetchGetMenuResponse | undefined;
	slug: TypeSlug;
}
