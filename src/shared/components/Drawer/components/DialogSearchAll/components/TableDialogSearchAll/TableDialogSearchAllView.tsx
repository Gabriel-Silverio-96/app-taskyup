import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const TableDialogSearchAllView: React.FC<any> = (props) => {
	const { data, rows, columns, isLoading } = props;
	return (
		<div style={{ height: 300, width: "100%" }}>
			<DataGrid loading={isLoading} rows={rows} columns={columns} rowCount={data?.countResult} />
		</div>
	);
};

export default TableDialogSearchAllView;