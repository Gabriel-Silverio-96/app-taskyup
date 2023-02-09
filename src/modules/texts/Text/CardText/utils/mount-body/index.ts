const mountBody = () => {
	const dateNow = Date.now();
	const title_text = `TaskYup text ${dateNow}`;

	const body = { title_text, text: "" };
	return body;
};

export default mountBody;