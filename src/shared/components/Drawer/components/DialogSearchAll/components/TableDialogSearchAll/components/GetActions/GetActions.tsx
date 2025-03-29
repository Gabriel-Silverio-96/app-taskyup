import {
	GridActionsCellItem,
	GridActionsCellItemProps,
	GridRowParams,
} from "@mui/x-data-grid";
import { ReactElement } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CLOSE_DIALOG_SEARCH_ALL_TYPE } from "shared/common/store/DialogSearchAll/DialogSearchAll.reduce";
import { createAction } from "shared/common/store/store.action";
import { generateQueryParams } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/utils/generateQueryParams";
import { getSubDirectory } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/utils/getSubDirectory";
import { ICON_SIZE } from "shared/constants";
import { createURLQueryParams } from "shared/utils/create-url-query-params";

const GetActions = (
	params: GridRowParams
): ReactElement<GridActionsCellItemProps>[] => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClickAcionCell = () => {
		const { type_board, board_id, id } = params.row;
		const subDirectory = getSubDirectory(type_board);
		const queryParams = generateQueryParams({ type_board, board_id, id });

		const url = createURLQueryParams(subDirectory, queryParams);

		navigate(url);
		dispatch(createAction(CLOSE_DIALOG_SEARCH_ALL_TYPE));
	};

	return [
		<GridActionsCellItem
			key={params.id}
			icon={<FiExternalLink size={ICON_SIZE.MEDIUM} />}
			label="Delete"
			onClick={handleClickAcionCell}
		/>,
	];
};

export default GetActions;
