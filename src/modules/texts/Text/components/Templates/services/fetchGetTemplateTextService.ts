export const fetchGetTemplateTextService = async (
	templateFilePath: RequestInfo | URL
): Promise<string> => {
	const response = await fetch(templateFilePath);
	const text = await response.text();

	return text;
};