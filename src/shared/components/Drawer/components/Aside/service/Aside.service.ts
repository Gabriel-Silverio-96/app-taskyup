import api from "shared/services/api";
import { IFetchGetMenuResponse } from "./types/Aside.service.types";

const fetchGetMenuService = async () => {
	const { data } = await api.get<IFetchGetMenuResponse>("/menu");
	return data;
};

export { fetchGetMenuService };
