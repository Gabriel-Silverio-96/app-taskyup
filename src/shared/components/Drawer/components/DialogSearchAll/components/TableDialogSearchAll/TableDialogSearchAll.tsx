import { GridRowsProp } from "@mui/x-data-grid";
import React from "react";
import { IPaginationModel } from "shared/common/types/AppTypes";
import TableDialogSearchAllView from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/TableDialogSearchAllView";
import { ITableDialogSearchAll } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/types";

const TableDialogSearchAll: React.FC<ITableDialogSearchAll> = ({
	data,
	isLoading,
	paginationModel,
	setPaginationModel,
}) => {
	const rows: GridRowsProp = data?.results || [];

	const hadlePaginationModelChange = (props: IPaginationModel) =>
		setPaginationModel(props);

	return (
		<TableDialogSearchAllView
			{...{
				data,
				rows,
				isLoading,
				paginationModel,
				hadlePaginationModelChange,
			}}
		/>
	);
};

export default TableDialogSearchAll;
