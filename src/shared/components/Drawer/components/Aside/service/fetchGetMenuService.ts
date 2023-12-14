import api from "shared/services/api";
import { IFetchGetMenuResponse } from "shared/components/Drawer/components/Aside/service/types";

export const fetchGetMenuService = async () => {
	const { data } = await api.get<IFetchGetMenuResponse>("/menu");
	return data;
};
