import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import type { ITableDialogSearchAllView } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/types";
import { TableDialogSearchAllContainer } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/table-dialog-search-all.style";
import { COLUMNS } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/table-dialog-search-all.constants";

const TableDialogSearchAllView: React.FC<ITableDialogSearchAllView> = props => {
	const {
		data,
		rows,
		isLoading,
		paginationModel,
		hadlePaginationModelChange,
	} = props;

	return (
		<TableDialogSearchAllContainer>
			<DataGrid
				loading={isLoading}
				rows={rows}
				columns={COLUMNS}
				rowCount={data?.countResult}
				pagination
				pageSizeOptions={[10, 25, 50]}
				paginationMode="server"
				paginationModel={paginationModel}
				onPaginationModelChange={hadlePaginationModelChange}
			/>
		</TableDialogSearchAllContainer>
	);
};

export default TableDialogSearchAllView;
