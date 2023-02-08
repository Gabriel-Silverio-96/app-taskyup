import api from "shared/services/api";
import { IFetchCreateText, IFetchTextBody } from "../../types";

const fetchTemplateText =  async (templateFile: RequestInfo | URL ): Promise<string> => {
	const response = await fetch(templateFile);
	const text = await response.text();

	return text;
};

const fetchCreateTextWithTemplate = async (board_id: string | undefined, body: IFetchTextBody) => {
	const response = await api.post<IFetchCreateText>(`/text/board_id=${board_id}`, body);
	return response;
};

export { fetchTemplateText, fetchCreateTextWithTemplate };
