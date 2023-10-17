import api from "shared/services/api";

export const fetchGetTextPermissions = async ({ params }: any) => {
	const { data } = await api.get("/text/permissions", { params });
	return data;
};
