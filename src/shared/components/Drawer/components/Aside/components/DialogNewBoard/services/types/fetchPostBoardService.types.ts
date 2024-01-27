import { IFetchDefaultResponse } from "shared/common/types";
import { IDialogNewBoardForm } from "shared/components/Drawer/components/Aside/components/DialogNewBoard/types";

export interface IFetchPostBoardProps {
	body: IDialogNewBoardForm;
}

export interface IFetchPostBoardService {
	({ body }: IFetchPostBoardProps): Promise<IFetchDefaultResponse>;
}
