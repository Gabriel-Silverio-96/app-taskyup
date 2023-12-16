import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IFetchPostCreateBoardProps {
	body: {
		title: string;
		board_type_id: string;
	};
}

export interface IFetchPostBoardService {
	({ body }: IFetchPostCreateBoardProps): Promise<IFetchResponseDefault>;
}
