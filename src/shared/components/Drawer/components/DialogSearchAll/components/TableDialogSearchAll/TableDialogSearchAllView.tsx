import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const TableDialogSearchAllView: React.FC<any> = props => {
	const {
		data,
		rows,
		columns,
		isLoading,
		paginationModel,
		hadlePaginationModelChange,
	} = props;

	return (
		<div style={{ height: 300, width: "100%" }}>
			<DataGrid
				loading={isLoading}
				rows={rows}
				columns={columns}
				rowCount={data?.countResult}
				pagination
				pageSizeOptions={[10]}
				paginationMode="server"
				paginationModel={paginationModel}				
				onPaginationModelChange={hadlePaginationModelChange}
			/>
		</div>
	);
};

export default TableDialogSearchAllView;
