import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import api from "shared/services/api";
import { IFetchBoard, IUseFetchBoard } from "./types/UseFetchBoard.types";

const useFetchBoard = (): IUseFetchBoard => {
	const fetchBoard = async () => {
		const { data } = await api.get("/board") as AxiosResponse<IFetchBoard[]>;
		return data;
	};
	const { isError, isLoading, data: board } = useQuery(["board"], fetchBoard);
	return { isError, isLoading, board };
};

export default useFetchBoard;
