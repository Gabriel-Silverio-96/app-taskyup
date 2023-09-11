import api from "shared/services/api";
import { IFetchMenu } from "./types/Aside.service";

const fetchMenu = async () => {
	const { data } = await api.get<IFetchMenu>("/menu");
	return data;
};

export { fetchMenu };