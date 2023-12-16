import { IFetchResponseDefault } from "shared/common/types/Fetch";
import { IDialogNewBoardForm } from "shared/components/Drawer/components/Aside/components/DialogNewBoard/types";

export interface IFetchPostBoardProps {
	body: IDialogNewBoardForm;
}

export interface IFetchPostBoardService {
	({ body }: IFetchPostBoardProps): Promise<IFetchResponseDefault>;
}
