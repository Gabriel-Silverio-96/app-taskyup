import { IPaginationModel } from "shared/common/types/AppTypes";
import { Dispatch, SetStateAction } from "react";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { IFetchGetSearchAllResponse } from "shared/components/Drawer/components/DialogSearchAll/services/types";

export interface ITableDialogSearchAll {
	data: IFetchGetSearchAllResponse | undefined;
	isLoading: boolean;
	paginationModel: IPaginationModel;
	setPaginationModel: Dispatch<SetStateAction<IPaginationModel>>;
}

export interface ITableDialogSearchAllView
	extends Omit<ITableDialogSearchAll, "setPaginationModel"> {
	rows: GridRowsProp;
	columns: GridColDef[];
	hadlePaginationModelChange: (props: IPaginationModel) => void;
}
