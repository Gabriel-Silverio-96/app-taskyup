import type {
	IGenerateQueryParams,
	IGenerateQueryParamsReturn,
} from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/utils/generateQueryParams/types";

const generateQueryParams = ({
	type_board,
	board_id,
	id,
}: IGenerateQueryParams): IGenerateQueryParamsReturn => {
	const params = type_board === "texts" ? { text_id: id } : { note_id: id };
	return { board_id, ...params };
};

export { generateQueryParams };
