import { IGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";

type PropertyName = "notes" | "texts";

/**
 * Represents component LinkTreeItem
 */
export interface ILinkTreeItem {
	/**
	 * The data associated with the menu response
	 */
	data: IGetMenuResponse | undefined;
	/**
	 * The name of the property associated with the menu response
	 */
	propertyName: PropertyName;
}
