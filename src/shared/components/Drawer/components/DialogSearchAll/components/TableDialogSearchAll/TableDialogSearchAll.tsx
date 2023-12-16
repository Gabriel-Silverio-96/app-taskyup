import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import React from "react";
import { IPaginationModel } from "shared/common/types/AppTypes";
import TableDialogSearchAllView from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/TableDialogSearchAllView";
import GetActionsTableDialogSearchAll from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/components/GetActionsTableDialogSearchAll";
import { ITableDialogSearchAll } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/types";

const TableDialogSearchAll: React.FC<ITableDialogSearchAll> = ({
	data,
	isLoading,
	paginationModel,
	setPaginationModel,
}) => {
	const rows: GridRowsProp = data?.results || [];

	const columns: GridColDef[] = [
		{ field: "title", headerName: "Title", width: 250 },
		{ field: "title_board", headerName: "Board name", width: 350 },
		{ field: "type_board", headerName: "Type Board", width: 100 },
		{
			field: "actions",
			type: "actions",
			getActions: GetActionsTableDialogSearchAll,
		},
	];

	const hadlePaginationModelChange = (props: IPaginationModel) =>
		setPaginationModel(props);

	return (
		<TableDialogSearchAllView
			{...{
				data,
				rows,
				columns,
				isLoading,
				paginationModel,
				hadlePaginationModelChange,
			}}
		/>
	);
};

export default TableDialogSearchAll;
