import { IGetOneTextResponse } from "modules/texts/TextEdit/components/Markdown/services/types";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IFetchPatchTextProps {
	params: {
		board_id: string | null;
		text_id: string | null;
	};
	data: IGetOneTextResponse;
}

export interface IPatchTextService {
	({ params, data }: IFetchPatchTextProps): Promise<IFetchDefaultResponse>;
}
