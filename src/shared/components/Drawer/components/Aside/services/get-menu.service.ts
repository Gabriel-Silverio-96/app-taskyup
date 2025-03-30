import api from "shared/services/api";
import { IGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";

export const getMenuService = async () => {
	const { data } = await api.get<IGetMenuResponse>("/menu");
	return data;
};
