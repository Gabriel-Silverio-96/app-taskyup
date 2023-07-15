import { IFetchMenu } from "shared/components/Drawer/Aside/service/types/Aside.service";

type TypeSlug = "notes" | "texts";

export interface ILinkTreeItem {
    menu: IFetchMenu | undefined;
    slug: TypeSlug;
}