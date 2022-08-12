const dateFormat = (date: string, locale = "en-US") => {
	const format = new Date(date).toLocaleDateString(locale);
	return format;
};

export default dateFormat;