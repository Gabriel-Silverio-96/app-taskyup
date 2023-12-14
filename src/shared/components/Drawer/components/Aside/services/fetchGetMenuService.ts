import api from "shared/services/api";
import { IFetchGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";

export const fetchGetMenuService = async () => {
	const { data } = await api.get<IFetchGetMenuResponse>("/menu");
	return data;
};
