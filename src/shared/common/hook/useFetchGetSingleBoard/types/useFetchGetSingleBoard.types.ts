import { IFetchGetSingleBoard } from "shared/common/types/Fetch";

export interface IUseFetchGetSingleBoard {
    data: IFetchGetSingleBoard;
    isError: boolean;
    isFetching: boolean;
}