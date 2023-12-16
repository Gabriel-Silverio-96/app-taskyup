import { GridRowsProp } from "@mui/x-data-grid";
import { Dispatch, SetStateAction } from "react";
import { IPaginationModel } from "shared/common/types/AppTypes";
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
	hadlePaginationModelChange: (props: IPaginationModel) => void;
}
