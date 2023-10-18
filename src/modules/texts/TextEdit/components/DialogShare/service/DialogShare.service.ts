import api from "shared/services/api";

export const fetchGetTextPermissions = async ({ params }: any) => {
	const { data } = await api.get("/text/permissions", { params });
	return data;
};

export const fetchPatchTextPermissions = async (data: any) => {
	const { payload, board_id, text_id } = data;
	const config = { params: { board_id, text_id } };

	return await api.patch("/text/edit/permissions", payload, config);
};
