import { IFetchGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";

export interface ITreeViewBoards {
	expanded: string[];
	onNodeToggle: (event: React.SyntheticEvent, nodeIds: string[]) => void;
	data: IFetchGetMenuResponse | undefined;
}
