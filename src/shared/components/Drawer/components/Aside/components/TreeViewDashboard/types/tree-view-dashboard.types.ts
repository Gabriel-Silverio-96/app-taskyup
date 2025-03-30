import { IGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";

export interface ITreeViewDashboard {
	expanded: string[];
	onNodeToggle: (event: React.SyntheticEvent, nodeIds: string[]) => void;
	data: IGetMenuResponse | undefined;
}
