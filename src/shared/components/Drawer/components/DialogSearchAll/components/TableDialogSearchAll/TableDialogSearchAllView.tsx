import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { ITableDialogSearchAllView } from "./types";
import { TableDialogSearchAllContainer } from "./style";

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
