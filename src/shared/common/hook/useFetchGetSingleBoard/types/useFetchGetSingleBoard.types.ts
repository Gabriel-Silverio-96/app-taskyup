import { IFetchGetOneBoard } from "shared/common/types/Fetch";

export interface IUseFetchGetSingleBoard {
    data: IFetchGetOneBoard;
    isError: boolean;
    isFetching: boolean;
}