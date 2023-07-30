import { IPaginationModel } from "shared/common/types/AppTypes";
import { IFetchGetSearchAllResponse } from "shared/components/Drawer/components/DialogSearchAll/types";
import { Dispatch, SetStateAction } from "react";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";

export interface ITableDialogSearchAll {
    data: IFetchGetSearchAllResponse;
    isLoading: boolean;
    paginationModel: IPaginationModel;
    setPaginationModel: Dispatch<SetStateAction<IPaginationModel>>;
}

export interface ITableDialogSearchAllView extends Omit<ITableDialogSearchAll, "setPaginationModel"> {
    rows: GridRowsProp;
    columns: GridColDef[];
    hadlePaginationModelChange: (props: IPaginationModel) => void;
}