import React from "react";
import TableDialogSearchAllView from "./TableDialogSearchAllView";
import { GridRowsProp, GridColDef } from "@mui/x-data-grid";

const TableDialogSearchAll: React.FC<any> = ({ data, isLoading }) => {
	const rows: GridRowsProp = data?.results || [];

	const columns: GridColDef[] = [
		{ field: "title", headerName: "Title", width: 250 },
		{ field: "title_board", headerName: "Board name", width: 350 },
		{ field: "type_board", headerName: "Type Board", width: 100 },
		{ field: "created_at", headerName: "Created", width: 100 },
	];

	return <TableDialogSearchAllView {... { data, rows, columns, isLoading }} />;
};

export default TableDialogSearchAll;