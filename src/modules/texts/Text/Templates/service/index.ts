const fetchTemplateText =  async (templateFile: RequestInfo | URL ): Promise<string> => {
	const response = await fetch(templateFile);
	const text = await response.text();

	return text;
};

export default fetchTemplateText;