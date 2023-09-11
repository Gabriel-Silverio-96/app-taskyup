import { IFetchGetMenuResponse } from "shared/components/Drawer/components/Aside/service/types";

type TypeSlug = "notes" | "texts";

export interface ILinkTreeItem {
	menu: IFetchGetMenuResponse | undefined;
	slug: TypeSlug;
}
