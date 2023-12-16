import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { ITableDialogSearchAllView } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/types";
import { TableDialogSearchAllContainer } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/style";

const TableDialogSearchAllView: React.FC<ITableDialogSearchAllView> = props => {
	const {
		data,
		rows,
		columns,
		isLoading,
		paginationModel,
		hadlePaginationModelChange,
	} = props;

	return (
		<TableDialogSearchAllContainer>
			<DataGrid
				loading={isLoading}
				rows={rows}
				columns={columns}
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
