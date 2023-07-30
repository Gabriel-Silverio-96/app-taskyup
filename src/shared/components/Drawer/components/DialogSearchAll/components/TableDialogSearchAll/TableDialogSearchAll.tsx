import React from "react";
import TableDialogSearchAllView from "./TableDialogSearchAllView";
import { GridActionsCellItem, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { FiExternalLink } from "react-icons/fi";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CLOSE_DIALOG_SEARCH_ALL_TYPE } from "shared/common/store/DialogSearchAll/DialogSearchAll.reduce";
import { createAction } from "shared/common/store/store.action";
import { getSubDirectory } from "./utils/getSubDirectory";
import { generateQueryParams } from "./utils/generateQueryParams";
import { IPaginationModel } from "shared/common/types/AppTypes";
import { ITableDialogSearchAll } from "./types";

const getActions: any = (params: any) => {
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
			icon={<FiExternalLink size={18}/>} 
			label="Delete"
			onClick={handleClickAcionCell}
		/>
	];
};

const TableDialogSearchAll: React.FC<ITableDialogSearchAll> = ({ data, isLoading, paginationModel, setPaginationModel }) => {
	const rows: GridRowsProp = data?.results || [];

	const columns: GridColDef[] = [
		{ field: "title", headerName: "Title", width: 250 },
		{ field: "title_board", headerName: "Board name", width: 350 },
		{ field: "type_board", headerName: "Type Board", width: 100 },
		{ field: "actions", type: "actions", getActions },
	];

	const hadlePaginationModelChange = (props: IPaginationModel) => setPaginationModel(props);
		
	return <TableDialogSearchAllView {... { data, rows, columns, isLoading, paginationModel, hadlePaginationModelChange  }} />;
};

export default TableDialogSearchAll;