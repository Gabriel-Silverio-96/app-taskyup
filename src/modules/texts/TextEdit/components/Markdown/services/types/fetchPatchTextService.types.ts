import { IFetchGetOneTextResponse } from "modules/texts/TextEdit/components/Markdown/services/types";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IFetchPatchTextProps {
	params: {
		board_id: string | null;
		text_id: string | null;
	};
	data: IFetchGetOneTextResponse;
}

export interface IFetchPatchTextService {
	({ params, data }: IFetchPatchTextProps): Promise<IFetchResponseDefault>;
}
